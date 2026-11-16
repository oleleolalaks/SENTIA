<?php
 /* Ativa a conferência estrita dos tipos declarados nas funções deste arquivo.
*/ declare(strict_types=1);

                                                                                   
 /* Esse comando prepara ou atualiza environment com os dados usados nesta operação.
*/ $environment =  /* Essa função anônima não depende de um objeto externo ligado a ela.
*/ static  /* Essa função agrupa as operações executadas quando for chamada.
*/ function (string $name, string $default): string {
     /* Esse comando prepara ou atualiza value com os dados usados nesta operação.
*/ $value =  /* Lê essa opção do ambiente do servidor.
*/ getenv($name);
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $value === false ? $default : $value;
};
 /* Esse comando prepara ou atualiza config com os dados usados nesta operação.
*/ $config = [
     /* Define o servidor do MySQL.
*/ 'host' => $environment('SENTIA_DB_HOST', '127.0.0.1'),
     /* Define a porta usada para abrir a conexão.
*/ 'port' => $environment('SENTIA_DB_PORT', '3306'),
     /* Indica o banco usado pelo SENTIA.
*/ 'database' => $environment('SENTIA_DB_NAME', 'sentia'),
     /* Define o usuário da conexão com o MySQL.
*/ 'username' => $environment('SENTIA_DB_USER', 'root'),
     /* Guarda a senha somente na configuração do servidor.
*/ 'password' => $environment('SENTIA_DB_PASSWORD', ''),
];

                                                                                              
 /* Esse comando prepara ou atualiza localFile com os dados usados nesta operação.
*/ $localFile = __DIR__ . '/config.local.php';
 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se esse arquivo existe antes de tentar carregar.
*/ is_file($localFile)) {
     /* Esse comando prepara ou atualiza local com os dados usados nesta operação.
*/ $local =  /* Carrega o arquivo PHP necessário para continuar essa execução.
*/ require $localFile;
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse valor é um array antes de usar suas posições.
*/ is_array($local)) {
         /* Interrompe esse caminho com a exceção indicada para tratar a falha.
*/ throw new  /* Cria uma exceção para sinalizar que essa configuração não pode ser usada.
*/ RuntimeException('Invalid local database configuration.');
    }
     /* Esse comando prepara ou atualiza config com os dados usados nesta operação.
*/ $config =  /* Substitui os padrões somente pelos valores da configuração indicada.
*/ array_replace($config,  /* Mantém somente as configurações que têm uma chave permitida.
*/ array_intersect_key($local, $config));
}
 /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $config;
