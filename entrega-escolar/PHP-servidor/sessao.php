<?php
declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

// O JavaScript pede o token antes de gravar. Esse endereço não depende da conexão com o MySQL.
sentia_method(['GET']);
sentia_session();
sentia_json(['ok' => true, 'csrfToken' => $_SESSION['csrf'], 'storage' => 'session', 'setupAllowed' => sentia_setup_allowed()]);
