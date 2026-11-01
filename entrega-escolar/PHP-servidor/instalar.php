<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';
$method = sentia_method(['GET', 'POST']);
if ($method === 'GET') {
    sentia_json(['ok' => true, 'requiresPost' => true, 'message' => 'Use o botão Preparar banco no site, que envia POST. Você também pode importar banco/schema.sql pelo phpMyAdmin. Esta consulta não altera o banco.']);
}

// A criação só é permitida pelo computador do XAMPP, depois de um pedido explícito do usuário.
if (!in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1', '::ffff:127.0.0.1'], true)) {
    sentia_error('local_setup_only', 'Prepare o banco pelo navegador do computador do XAMPP, em localhost.', 403);
}
$pdo = sentia_pdo(false);
$database = sentia_config()['database'];
$pdo->exec('CREATE DATABASE IF NOT EXISTS `' . $database . '` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
$pdo->exec('USE `' . $database . '`');
$pdo->exec('CREATE TABLE IF NOT EXISTS registros (
    id VARCHAR(64) COLLATE utf8mb4_bin NOT NULL,
    text VARCHAR(160) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
$pdo->query('SELECT id, text, done, created_at, updated_at FROM registros LIMIT 0');
sentia_json(['ok' => true, 'ready' => true, 'database' => $database, 'message' => 'Banco preparado. Os registros existentes foram preservados.']);
