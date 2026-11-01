<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';
sentia_method(['GET']);
$pdo = sentia_pdo();
// Só consulta. Abrir a página ou verificar o status não cria nem apaga banco ou tabela.
$pdo->query('SELECT id, text, done, created_at, updated_at FROM registros LIMIT 0');
$count = (int) $pdo->query('SELECT COUNT(*) FROM registros')->fetchColumn();
sentia_json(['ok' => true, 'ready' => true, 'database' => sentia_config()['database'], 'recordsCount' => $count]);
