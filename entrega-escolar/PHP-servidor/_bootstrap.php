<?php
declare(strict_types=1);

// O arquivo de apoio só entra pelo require dos endpoints, mesmo em um servidor que não lê .htaccess.
if (PHP_SAPI !== 'cli' && realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    http_response_code(404);
    exit;
}

// As respostas da API são JSON. Erros internos e respostas antigas não ficam expostos ao visitante.
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

// O site recebe uma mensagem útil, mas não recebe senha, consulta SQL ou endereço do banco.
function sentia_error(string $code, string $message, int $status = 400, array $extra = []): void
{
    sentia_json(array_merge(['ok' => false, 'error' => ['code' => $code, 'message' => $message]], $extra), $status);
}

function sentia_database_error(Throwable $error): void
{
    $driverCode = $error instanceof PDOException && isset($error->errorInfo[1]) ? (int) $error->errorInfo[1] : 0;
    if (in_array($driverCode, [1049, 1146, 1054], true)) {
        sentia_error('schema_missing', 'Importe banco/schema.sql no banco selecionado pelo phpMyAdmin. Em uma instalação local, também é possível usar Preparar banco.', 503, ['ready' => false, 'setupAllowed' => sentia_setup_allowed()]);
    }
    sentia_error('database_unavailable', 'Não foi possível acessar o MySQL. Confira o serviço e os dados de conexão na configuração privada da API.', 503, ['ready' => false, 'setupAllowed' => sentia_setup_allowed()]);
}

set_exception_handler(static function (Throwable $error): void {
    if ($error instanceof PDOException) {
        sentia_database_error($error);
    }
    sentia_error('server_error', 'Não foi possível concluir a operação. Confira a instalação PHP e a configuração privada da API.', 500);
});

function sentia_https(): bool
{
    return !empty($_SERVER['HTTPS']) && strtolower((string) $_SERVER['HTTPS']) !== 'off';
}

function sentia_setup_allowed(): bool
{
    $host = parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST);
    return in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1', '::ffff:127.0.0.1'], true) &&
        in_array(strtolower((string) $host), ['localhost', '127.0.0.1', '::1', '[::1]'], true);
}

// A sessão separa o registro de cada navegador. O cookie identifica uma sessão, não uma conta ou pessoa.
function sentia_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    ini_set('session.use_strict_mode', '1');
    ini_set('session.use_only_cookies', '1');
    session_name('SENTIA_SESSION');
    $base = str_replace('\\', '/', dirname(dirname($_SERVER['SCRIPT_NAME'] ?? '/api/sessao.php')));
    $cookiePath = $base === '/' || $base === '.' ? '/' : rtrim($base, '/') . '/';
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => $cookiePath,
        'secure' => sentia_https(),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    if (!session_start()) {
        sentia_error('session_unavailable', 'Não foi possível iniciar a sessão. Confira os cookies e o suporte a sessões do servidor.', 503);
    }
    if (!isset($_SESSION['csrf']) || !is_string($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    if (!isset($_SESSION['owner']) || !is_string($_SESSION['owner'])) {
        $_SESSION['owner'] = bin2hex(random_bytes(32));
    }
}

function sentia_owner(): string
{
    sentia_session();
    return hash('sha256', $_SESSION['owner']);
}

// Antes de gravar ou apagar, o pedido precisa trazer o token que este navegador recebeu da API.
function sentia_require_csrf(): void
{
    sentia_session();
    $token = $_SERVER['HTTP_X_SENTIA_CSRF'] ?? '';
    if (!is_string($token) || !hash_equals($_SESSION['csrf'], $token)) {
        sentia_error('csrf_invalid', 'A sessão mudou ou expirou. Atualize a conexão e tente novamente.', 403);
    }
}

function sentia_method(array $allowed): string
{
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    if (!in_array($method, $allowed, true)) {
        header('Allow: ' . implode(', ', $allowed));
        sentia_error('method_not_allowed', 'Este endereço não aceita esse método.', 405);
    }
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $origin = parse_url($_SERVER['HTTP_ORIGIN']);
        $request = parse_url((sentia_https() ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? ''));
        $originPort = $origin['port'] ?? (($origin['scheme'] ?? '') === 'https' ? 443 : 80);
        $requestPort = $request['port'] ?? (sentia_https() ? 443 : 80);
        if ($origin === false || $request === false ||
            !in_array($origin['scheme'] ?? '', ['http', 'https'], true) ||
            strtolower($origin['host'] ?? '') !== strtolower($request['host'] ?? '') ||
            ($origin['scheme'] ?? '') !== ($request['scheme'] ?? '') || $originPort !== $requestPort) {
            sentia_error('origin_not_allowed', 'Abra o SENTIA e a API pelo mesmo endereço.', 403);
        }
    }
    if ($method !== 'GET') {
        sentia_require_csrf();
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
            sentia_error('invalid_configuration', 'Confira os campos da configuração privada da API.', 500);
        }
    }
    $port = (string) ($config['port'] ?? '');
    if (!preg_match('/\A[a-zA-Z0-9.:-]{1,255}\z/D', $config['host']) ||
        !preg_match('/\A[a-zA-Z0-9_]{1,64}\z/D', $config['database']) ||
        !ctype_digit($port) || (int) $port < 1 || (int) $port > 65535 || $config['username'] === '') {
        sentia_error('invalid_configuration', 'Confira servidor, porta, banco e usuário na configuração privada da API.', 500);
    }
    $config['port'] = $port;
    return $config;
}

function sentia_pdo(bool $withDatabase = true): PDO
{
    if (!class_exists('PDO') || !in_array('mysql', PDO::getAvailableDrivers(), true)) {
        sentia_error('php_mysql_missing', 'Ative a extensão pdo_mysql no PHP do servidor.', 503, ['ready' => false]);
    }
    $config = sentia_config();
    $dsn = 'mysql:host=' . $config['host'] . ';port=' . $config['port'] .
        ($withDatabase ? ';dbname=' . $config['database'] : '') . ';charset=utf8mb4';
    $pdo = new PDO($dsn, $config['username'], $config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_TIMEOUT => 3,
    ]);
    // A confirmação de contato usa um horário UTC consistente com o valor lido do banco.
    $pdo->exec("SET time_zone = '+00:00'");
    return $pdo;
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

// Esses limites também são conferidos no servidor. A validação do navegador não substitui esta etapa.
function sentia_field($value, string $field, int $minimum, int $maximum, bool $multiline = false): string
{
    if (!is_string($value) || !preg_match('//u', $value)) {
        sentia_error('invalid_' . $field, 'Confira o campo ' . $field . '.', 422);
    }
    $value = preg_replace('/\A\s+|\s+\z/u', '', $value);
    $length = preg_match_all('/./us', $value);
    $invalidControls = $multiline ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/' : '/[\x00-\x1F\x7F]/';
    if ($length < $minimum || $length > $maximum || preg_match($invalidControls, $value)) {
        sentia_error('invalid_' . $field, 'O campo ' . $field . ' precisa ter de ' . $minimum . ' a ' . $maximum . ' caracteres válidos.', 422);
    }
    return $value;
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
    return sentia_field($value, 'text', 1, 160);
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

function sentia_find(PDO $pdo, string $id, string $owner): ?array
{
    $statement = $pdo->prepare('SELECT id, text, done FROM registros WHERE id = :id AND owner_hash = :owner');
    $statement->execute(['id' => $id, 'owner' => $owner]);
    $row = $statement->fetch();
    return $row === false ? null : sentia_record($row);
}
