<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$method = sentia_method(['GET', 'POST']);
if ($method === 'GET') {
    sentia_json(['ok' => true, 'requiresPost' => true, 'setupAllowed' => sentia_setup_allowed(), 'message' => 'A instalação automática só funciona no próprio computador. Na hospedagem, importe banco/schema.sql pelo phpMyAdmin no banco criado pelo painel.']);
}
if (!sentia_setup_allowed()) {
    sentia_error('local_setup_only', 'Na hospedagem, importe banco/schema.sql pelo phpMyAdmin. Este instalador só funciona no próprio computador.', 403);
}

// Criar o banco é permitido só no preparo local. O SQL de hospedagem não contém esse comando.
$pdo = sentia_pdo(false);
$database = sentia_config()['database'];
$pdo->exec('CREATE DATABASE IF NOT EXISTS `' . $database . '` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
$pdo->exec('USE `' . $database . '`');

// As instruções são fixas e não recebem entradas do visitante. A migração preserva as linhas existentes.
$schemaFile = dirname(__DIR__) . '/banco/schema.sql';
if (!is_file($schemaFile)) {
    $schemaFile = dirname(__DIR__, 2) . '/banco/schema.sql';
}
$schema = is_file($schemaFile) ? file_get_contents($schemaFile) : false;
if ($schema === false) {
    sentia_error('schema_unavailable', 'O arquivo de estrutura do banco não foi encontrado.', 500);
}
$schema = preg_replace('/^--.*$/m', '', $schema);
foreach (explode(';', $schema) as $instruction) {
    if (trim($instruction) !== '') {
        $result = $pdo->query($instruction);
        if ($result !== false) {
            $result->closeCursor();
        }
    }
}
$pdo->query('SELECT id, text, done, owner_hash FROM registros LIMIT 0');
$pdo->query('SELECT id, owner_hash, nome, email, mensagem FROM contatos LIMIT 0');
sentia_json(['ok' => true, 'ready' => true, 'setupAllowed' => true, 'message' => 'As tabelas de tarefas e contato estão prontas. Os registros antigos foram preservados e não são expostos a visitantes.']);
