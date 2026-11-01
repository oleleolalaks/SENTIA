<?php
declare(strict_types=1);

// Aq ficam os padrões do XAMPP. As credenciais ficam no PHP, nunca no JavaScript.
$environment = static function (string $name, string $default): string {
    $value = getenv($name);
    return $value === false ? $default : $value;
};
$config = [
    'host' => $environment('SENTIA_DB_HOST', '127.0.0.1'),
    'port' => $environment('SENTIA_DB_PORT', '3306'),
    'database' => $environment('SENTIA_DB_NAME', 'sentia'),
    'username' => $environment('SENTIA_DB_USER', 'root'),
    'password' => $environment('SENTIA_DB_PASSWORD', ''),
];

// Se o seu MySQL tem outra senha/porta, copie config.local.example.php para config.local.php.
$localFile = __DIR__ . '/config.local.php';
if (is_file($localFile)) {
    $local = require $localFile;
    if (!is_array($local)) {
        throw new RuntimeException('Invalid local database configuration.');
    }
    $config = array_replace($config, array_intersect_key($local, $config));
}
return $config;
