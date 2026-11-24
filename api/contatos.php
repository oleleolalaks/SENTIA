<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

// O contato aceita envio, mas não oferece uma listagem pública de nomes, e-mails ou mensagens.
sentia_method(['POST']);
$data = sentia_body(['name', 'email', 'message']);
$name = sentia_field($data['name'] ?? null, 'name', 2, 80);
$email = sentia_field($data['email'] ?? null, 'email', 3, 160);
$message = sentia_field($data['message'] ?? null, 'message', 10, 1000, true);
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    sentia_error('invalid_email', 'Confira o formato do e-mail.', 422);
}

// O limite reduz envios repetidos acidentais. Não é um serviço de e-mail ou uma autenticação de usuário.
$now = time();
$recent = array_values(array_filter($_SESSION['contact_times'] ?? [], static function ($timestamp) use ($now): bool {
    return is_int($timestamp) && $timestamp > $now - 600;
}));
if (count($recent) >= 10) {
    header('Retry-After: 600');
    sentia_error('contact_rate_limited', 'Você já enviou várias mensagens. Aguarde alguns minutos antes de tentar novamente.', 429);
}

$id = bin2hex(random_bytes(16));
$pdo = sentia_pdo();
$statement = $pdo->prepare('INSERT INTO contatos (id, owner_hash, nome, email, mensagem) VALUES (:id, :owner, :name, :email, :message)');
$statement->execute(['id' => $id, 'owner' => sentia_owner(), 'name' => $name, 'email' => $email, 'message' => $message]);

// A confirmação é lida do banco depois do INSERT. A resposta não repete os dados pessoais recebidos.
$receipt = $pdo->prepare('SELECT id, created_at FROM contatos WHERE id = :id AND owner_hash = :owner');
$receipt->execute(['id' => $id, 'owner' => sentia_owner()]);
$saved = $receipt->fetch();
if ($saved === false) {
    sentia_error('receipt_unavailable', 'A confirmação do envio não pôde ser consultada.', 500);
}
$_SESSION['contact_times'] = array_merge($recent, [$now]);
$createdAt = (new DateTimeImmutable($saved['created_at'], new DateTimeZone('UTC')))->format('Y-m-d\TH:i:s\Z');
sentia_json(['ok' => true, 'contato' => ['id' => $saved['id'], 'createdAt' => $createdAt]], 201);
