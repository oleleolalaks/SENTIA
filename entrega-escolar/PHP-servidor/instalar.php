<?php
 /* Ativa a conferência estrita dos tipos declarados nas funções deste arquivo.
*/ declare(strict_types=1);
 /* Carrega o arquivo PHP necessário para continuar essa execução.
*/ require __DIR__ . '/_bootstrap.php';
 /* Esse comando prepara ou atualiza method com os dados usados nesta operação.
*/ $method =  /* Confere se esse endereço aceita o método e a origem do pedido.
*/ sentia_method(['GET', 'POST']);
 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($method === 'GET') {
     /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Informa que a preparação do banco precisa de um pedido POST explícito.
*/ 'requiresPost' => true,  /* Guarda a mensagem apresentada para essa situação.
*/ 'message' =>  /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'Use o botão Preparar banco no site, que envia POST. Você também pode importar banco/schema.sql pelo phpMyAdmin. Esta consulta não altera o banco.']);
}

                                                                                                     
 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse valor está entre as opções aceitas.
*/ in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1', '::ffff:127.0.0.1'], true)) {
     /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('local_setup_only', 'Prepare o banco pelo navegador do computador do XAMPP, em localhost.', 403);
}
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo(false);
 /* Esse comando prepara ou atualiza database com os dados usados nesta operação.
*/ $database =  /* Carrega e valida os valores usados na conexão com o MySQL.
*/ sentia_config()['database'];
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo-> /* Executa essa instrução SQL diretamente nessa conexão.
*/ exec( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'CREATE DATABASE IF NOT EXISTS `' . $database . '` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo-> /* Executa essa instrução SQL diretamente nessa conexão.
*/ exec( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'USE `' . $database . '`');
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo-> /* Executa essa instrução SQL diretamente nessa conexão.
*/ exec( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'CREATE TABLE IF NOT EXISTS registros (
    id VARCHAR(64) COLLATE utf8mb4_bin NOT NULL,
    text VARCHAR(160) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo-> /* Executa a consulta de leitura nessa conexão com o MySQL.
*/ query( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'SELECT id, text, done, created_at, updated_at FROM registros LIMIT 0');
 /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Informa se o banco e a tabela estão prontos para uso.
*/ 'ready' => true,  /* Indica o banco usado pelo SENTIA.
*/ 'database' => $database,  /* Guarda a mensagem apresentada para essa situação.
*/ 'message' => 'Banco preparado. Os registros existentes foram preservados.']);
