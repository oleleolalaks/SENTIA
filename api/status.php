<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

sentia_method(['GET']);
$owner = sentia_owner();
$pdo = sentia_pdo();

// LIMIT 0 confere as duas estruturas sem devolver mensagens ou dados da configuração privada.
$pdo->query('SELECT id, text, done, owner_hash, created_at, updated_at FROM registros LIMIT 0');
$pdo->query('SELECT id, owner_hash, nome, email, mensagem, created_at FROM contatos LIMIT 0');
$statement = $pdo->prepare('SELECT COUNT(*) FROM registros WHERE owner_hash = :owner');
$statement->execute(['owner' => $owner]);
sentia_json(['ok' => true, 'ready' => true, 'recordsCount' => (int) $statement->fetchColumn(), 'storage' => 'session', 'setupAllowed' => sentia_setup_allowed()]);
