<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';
$method = sentia_method(['GET', 'POST', 'PUT', 'DELETE']);

if ($method === 'GET') {
    $pdo = sentia_pdo();
    $rows = $pdo->query('SELECT id, text, done FROM registros ORDER BY created_at ASC, id ASC')->fetchAll();
    sentia_json(['ok' => true, 'registros' => array_map('sentia_record', $rows)]);
}

$data = sentia_body($method === 'DELETE' ? ['id', 'all'] : ['id', 'text', 'done']);

if ($method === 'POST') {
    $id = array_key_exists('id', $data) ? sentia_id($data['id']) : bin2hex(random_bytes(16));
    $text = sentia_text($data['text'] ?? null);
    $done = array_key_exists('done', $data) ? sentia_done($data['done']) : false;
    $pdo = sentia_pdo();
    $statement = $pdo->prepare('INSERT INTO registros (id, text, done) VALUES (:id, :text, :done)');
    try {
        $statement->execute(['id' => $id, 'text' => $text, 'done' => (int) $done]);
    } catch (PDOException $error) {
        if (isset($error->errorInfo[1]) && (int) $error->errorInfo[1] === 1062) {
            sentia_error('id_exists', 'Já existe uma ação com esse identificador.', 409);
        }
        throw $error;
    }
    sentia_json(['ok' => true, 'registro' => ['id' => $id, 'text' => $text, 'done' => $done]], 201);
}

if ($method === 'PUT') {
    $id = sentia_id($data['id'] ?? null);
    $fields = [];
    $values = ['id' => $id];
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
    // Só os nomes definidos acima entram no SQL; os valores digitados usam parâmetros preparados.
    $statement = $pdo->prepare('UPDATE registros SET ' . implode(', ', $fields) . ' WHERE id = :id');
    $statement->execute($values);
    $record = sentia_find($pdo, $id);
    if ($record === null) {
        sentia_error('not_found', 'Essa ação não está mais no banco.', 404);
    }
    sentia_json(['ok' => true, 'registro' => $record]);
}

if (array_key_exists('all', $data)) {
    if ($data['all'] !== true || array_key_exists('id', $data)) {
        sentia_error('invalid_delete', 'Para limpar a lista, envie somente all: true.', 422);
    }
    $pdo = sentia_pdo();
    $deleted = $pdo->exec('DELETE FROM registros');
} else {
    $id = sentia_id($data['id'] ?? null);
    $pdo = sentia_pdo();
    $statement = $pdo->prepare('DELETE FROM registros WHERE id = :id');
    $statement->execute(['id' => $id]);
    $deleted = $statement->rowCount();
}
sentia_json(['ok' => true, 'deleted' => (int) $deleted]);
