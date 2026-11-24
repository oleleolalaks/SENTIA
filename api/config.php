<?php
declare(strict_types=1);

// Este arquivo é carregado pela API, não é uma página para abrir no navegador.
if (PHP_SAPI !== 'cli' && realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    http_response_code(404);
    exit;
}

// Os padrões do XAMPP só valem no próprio computador. A hospedagem precisa dos valores fornecidos pelo painel.
$requestHost = parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST);
$isLocal = PHP_SAPI === 'cli' || (
    in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1', '::ffff:127.0.0.1'], true) &&
    in_array(strtolower((string) $requestHost), ['localhost', '127.0.0.1', '::1', '[::1]'], true)
);
$environment = static function (string $name, string $default): string {
    $value = getenv($name);
    return $value === false ? $default : $value;
};
$config = [
    'host' => $environment('SENTIA_DB_HOST', $isLocal ? '127.0.0.1' : ''),
    'port' => $environment('SENTIA_DB_PORT', '3306'),
    'database' => $environment('SENTIA_DB_NAME', $isLocal ? 'sentia' : ''),
    'username' => $environment('SENTIA_DB_USER', $isLocal ? 'root' : ''),
    'password' => $environment('SENTIA_DB_PASSWORD', ''),
];

// Na hospedagem, este arquivo pode ficar um nível acima da raiz pública do projeto.
// A cópia local antiga continua aceita, mas não deve entrar em ZIPs públicos ou no GitHub.
$privateFile = dirname(__DIR__, 2) . '/sentia-config.php';
$localFile = __DIR__ . '/config.local.php';
$configurationFile = is_file($privateFile) ? $privateFile : $localFile;
if (is_file($configurationFile)) {
    $local = require $configurationFile;
    if (!is_array($local)) {
        throw new RuntimeException('Invalid private database configuration.');
    }
    $config = array_replace($config, array_intersect_key($local, $config));
}
return $config;
