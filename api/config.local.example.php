<?php
if (PHP_SAPI !== 'cli' && realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    http_response_code(404);
    exit;
}

// Copie este modelo para api/config.local.php apenas na instalação que vai executar o PHP.
// Outra opção é salvar como sentia-config.php um nível acima da pasta pública do projeto.
// Preencha com os valores do painel. Não envie o arquivo preenchido para o GitHub ou para o professor.
return [
    'host' => 'HOST_MYSQL_DO_PAINEL',
    'port' => '3306',
    'database' => 'BANCO_CRIADO_NO_PAINEL',
    'username' => 'USUARIO_MYSQL_DO_PAINEL',
    'password' => '',
];
