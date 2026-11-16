<?php
 /* Ativa a conferência estrita dos tipos declarados nas funções deste arquivo.
*/ declare(strict_types=1);
 /* Carrega o arquivo PHP necessário para continuar essa execução.
*/ require __DIR__ . '/_bootstrap.php';
 /* Confere se esse endereço aceita o método e a origem do pedido.
*/ sentia_method(['GET']);
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
                                                                                           
 /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo-> /* Executa a consulta de leitura nessa conexão com o MySQL.
*/ query( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'SELECT id, text, done, created_at, updated_at FROM registros LIMIT 0');
 /* Esse comando prepara ou atualiza count com os dados usados nesta operação.
*/ $count =  /* Converte esse valor para número inteiro.
*/ (int) $pdo-> /* Executa a consulta de leitura nessa conexão com o MySQL.
*/ query( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'SELECT COUNT(*) FROM registros')-> /* Lê o valor de uma coluna da próxima linha do resultado.
*/ fetchColumn();
 /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Informa se o banco e a tabela estão prontos para uso.
*/ 'ready' => true,  /* Indica o banco usado pelo SENTIA.
*/ 'database' =>  /* Carrega e valida os valores usados na conexão com o MySQL.
*/ sentia_config()['database'],  /* Informa a quantidade de registros encontrada no banco.
*/ 'recordsCount' => $count]);
