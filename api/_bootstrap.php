<?php
declare(strict_types=1);

// Respostas previsíveis ajudam o site a explicar falhas sem mostrar senha ou detalhes do servidor.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function sentia_json(array $data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function sentia_error(string $code, string $message, int $status = 400, array $extra = []): void
{
    sentia_json(array_merge(['ok' => false, 'error' => ['code' => $code, 'message' => $message]], $extra), $status);
}

function sentia_database_error(Throwable $error): void
{
    $driverCode = $error instanceof PDOException && isset($error->errorInfo[1]) ? (int) $error->errorInfo[1] : 0;
    if (in_array($driverCode, [1049, 1146, 1054], true)) {
        sentia_error('schema_missing', 'O banco do SENTIA precisa ser preparado. Use Preparar banco ou importe banco/schema.sql pelo phpMyAdmin.', 503, ['ready' => false]);
    }
    sentia_error('database_unavailable', 'Não foi possível acessar o MySQL. Inicie o MySQL no XAMPP e confira a configuração local da API.', 503, ['ready' => false]);
}

set_exception_handler(static function (Throwable $error): void {
    if ($error instanceof PDOException) {
        sentia_database_error($error);
    }
    sentia_error('server_error', 'Não foi possível concluir a operação. Confira a instalação PHP e a configuração local da API.', 500);
});

function sentia_method(array $allowed): string
{
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    if (!in_array($method, $allowed, true)) {
        header('Allow: ' . implode(', ', $allowed));
        sentia_error('method_not_allowed', 'Este endereço não aceita esse método.', 405);
    }
    // O site usa a API na mesma origem. Um formulário de outro site não inicia alterações locais.
    if ($method !== 'GET' && isset($_SERVER['HTTP_ORIGIN'])) {
        $origin = parse_url($_SERVER['HTTP_ORIGIN']);
        $request = parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''));
        $originPort = $origin['port'] ?? (($origin['scheme'] ?? '') === 'https' ? 443 : 80);
        $requestPort = $request['port'] ?? (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 443 : 80);
        if ($origin === false || $request === false ||
            strtolower($origin['host'] ?? '') !== strtolower($request['host'] ?? '') || $originPort !== $requestPort) {
            sentia_error('origin_not_allowed', 'Abra o SENTIA e a API pelo mesmo endereço local.', 403);
        }
    }
    return $method;
}

function sentia_config(): array
{
    static $config;
    if ($config !== null) {
        return $config;
    }
    $config = require __DIR__ . '/config.php';
    foreach (['host', 'database', 'username', 'password'] as $field) {
        if (!isset($config[$field]) || !is_string($config[$field])) {
            sentia_error('invalid_configuration', 'Confira os campos de api/config.local.php.', 500);
        }
    }
    // A conexão é montada somente depois dessa validação; nomes não entram livres no DSN ou no SQL.
    $port = (string) ($config['port'] ?? '');
    if (!preg_match('/\A[a-zA-Z0-9.:-]{1,255}\z/D', $config['host']) ||
        !preg_match('/\A[a-zA-Z0-9_]{1,64}\z/D', $config['database']) ||
        !ctype_digit($port) || (int) $port < 1 || (int) $port > 65535) {
        sentia_error('invalid_configuration', 'Confira o servidor, a porta e o nome do banco em api/config.local.php.', 500);
    }
    $config['port'] = $port;
    return $config;
}

function sentia_pdo(bool $withDatabase = true): PDO
{
    if (!class_exists('PDO') || !in_array('mysql', PDO::getAvailableDrivers(), true)) {
        sentia_error('php_mysql_missing', 'Ative a extensão pdo_mysql no PHP do XAMPP e reinicie o Apache.', 503, ['ready' => false]);
    }
    $config = sentia_config();
    $dsn = 'mysql:host=' . $config['host'] . ';port=' . $config['port'] .
        ($withDatabase ? ';dbname=' . $config['database'] : '') . ';charset=utf8mb4';
    return new PDO($dsn, $config['username'], $config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_TIMEOUT => 3,
    ]);
}

function sentia_body(array $allowed): array
{
    $contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
    if ($contentType !== 'application/json') {
        sentia_error('json_required', 'Envie os dados como application/json.', 415);
    }
    $raw = file_get_contents('php://input', false, null, 0, 8193);
    if ($raw === false || strlen($raw) > 8192) {
        sentia_error('body_too_large', 'O pedido ultrapassou o tamanho permitido.', 413);
    }
    $decoded = json_decode($raw);
    if (json_last_error() !== JSON_ERROR_NONE || !is_object($decoded)) {
        sentia_error('invalid_json', 'Envie um objeto JSON válido.', 400);
    }
    $data = get_object_vars($decoded);
    if (array_diff(array_keys($data), $allowed)) {
        sentia_error('unknown_field', 'O pedido contém um campo que não é reconhecido.', 422);
    }
    return $data;
}

function sentia_id($value): string
{
    if (!is_string($value) || !preg_match('/\A[a-zA-Z0-9_-]{1,64}\z/D', $value)) {
        sentia_error('invalid_id', 'O identificador deve ter de 1 a 64 letras, números, traços ou sublinhados.', 422);
    }
    return $value;
}

function sentia_text($value): string
{
    if (!is_string($value) || !preg_match('//u', $value)) {
        sentia_error('invalid_text', 'Escreva uma ação em texto UTF-8 válido.', 422);
    }
    $value = preg_replace('/\A\s+|\s+\z/u', '', $value);
    $length = preg_match_all('/./us', $value);
    if ($length < 1 || $length > 160 || preg_match('/[\x00-\x1F\x7F]/', $value)) {
        sentia_error('invalid_text', 'A ação precisa ter de 1 a 160 caracteres, sem caracteres de controle.', 422);
    }
    return $value;
}

function sentia_done($value): bool
{
    if (!is_bool($value)) {
        sentia_error('invalid_done', 'O campo done deve ser true ou false.', 422);
    }
    return $value;
}

function sentia_record(array $row): array
{
    return ['id' => (string) $row['id'], 'text' => (string) $row['text'], 'done' => (bool) $row['done']];
}

function sentia_find(PDO $pdo, string $id): ?array
{
    $statement = $pdo->prepare('SELECT id, text, done FROM registros WHERE id = :id');
    $statement->execute(['id' => $id]);
    $row = $statement->fetch();
    return $row === false ? null : sentia_record($row);
}
