<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$method = sentia_method(['GET', 'POST', 'PUT', 'DELETE']);
$owner = sentia_owner();

// Cada consulta usa o dono da sessão. Conhecer o identificador de outra ação não dá acesso a ela.
if ($method === 'GET') {
    $pdo = sentia_pdo();
    $statement = $pdo->prepare('SELECT id, text, done FROM registros WHERE owner_hash = :owner ORDER BY created_at ASC, id ASC');
    $statement->execute(['owner' => $owner]);
    sentia_json(['ok' => true, 'registros' => array_map('sentia_record', $statement->fetchAll())]);
}

$data = sentia_body($method === 'DELETE' ? ['id', 'all'] : ['id', 'text', 'done']);

if ($method === 'POST') {
    $id = array_key_exists('id', $data) ? sentia_id($data['id']) : bin2hex(random_bytes(16));
    $text = sentia_text($data['text'] ?? null);
    $done = array_key_exists('done', $data) ? sentia_done($data['done']) : false;
    $pdo = sentia_pdo();
    $statement = $pdo->prepare('INSERT INTO registros (id, text, done, owner_hash) VALUES (:id, :text, :done, :owner)');
    try {
        $statement->execute(['id' => $id, 'text' => $text, 'done' => (int) $done, 'owner' => $owner]);
    } catch (PDOException $error) {
        if (isset($error->errorInfo[1]) && (int) $error->errorInfo[1] === 1062) {
            sentia_error('id_exists', 'Não foi possível usar esse identificador. Atualize a lista e tente novamente.', 409);
        }
        throw $error;
    }
    sentia_json(['ok' => true, 'registro' => ['id' => $id, 'text' => $text, 'done' => $done]], 201);
}

if ($method === 'PUT') {
    $id = sentia_id($data['id'] ?? null);
    $fields = [];
    $values = ['id' => $id, 'owner' => $owner];
    if (array_key_exists('text', $data)) {
        $values['text'] = sentia_text($data['text']);
        $fields[] = 'text = :text';
    }
    if (array_key_exists('done', $data)) {
        $values['done'] = (int) sentia_done($data['done']);
        $fields[] = 'done = :done';
    }
    if (!$fields) {
        sentia_error('missing_changes', 'Envie text ou done para alterar a ação.', 422);
    }
    $pdo = sentia_pdo();
    // Os nomes de coluna vêm da lista fixa acima. Os valores continuam nos marcadores da consulta preparada.
    $statement = $pdo->prepare('UPDATE registros SET ' . implode(', ', $fields) . ' WHERE id = :id AND owner_hash = :owner');
    $statement->execute($values);
    $record = sentia_find($pdo, $id, $owner);
    if ($record === null) {
        sentia_error('not_found', 'Essa ação não está disponível nesta sessão.', 404);
    }
    sentia_json(['ok' => true, 'registro' => $record]);
}

$pdo = sentia_pdo();
if (array_key_exists('all', $data)) {
    if ($data['all'] !== true || array_key_exists('id', $data)) {
        sentia_error('invalid_delete', 'Para limpar a lista, envie somente all igual a true.', 422);
    }
    // Apagar o registro limpa apenas as ações deste navegador, sem afetar outros visitantes.
    $statement = $pdo->prepare('DELETE FROM registros WHERE owner_hash = :owner');
    $statement->execute(['owner' => $owner]);
} else {
    $id = sentia_id($data['id'] ?? null);
    $statement = $pdo->prepare('DELETE FROM registros WHERE id = :id AND owner_hash = :owner');
    $statement->execute(['id' => $id, 'owner' => $owner]);
}
sentia_json(['ok' => true, 'deleted' => $statement->rowCount()]);
