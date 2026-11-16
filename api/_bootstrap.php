<?php
 /* Ativa a conferência estrita dos tipos declarados nas funções deste arquivo.
*/ declare(strict_types=1);

                                                                                                    
 /* Ajusta essa configuração do PHP para a execução deste pedido.
*/ ini_set('display_errors', '0');
 /* Define esse cabeçalho da resposta antes de enviar o conteúdo.
*/ header('Content-Type: application/json; charset=utf-8');
 /* Define esse cabeçalho da resposta antes de enviar o conteúdo.
*/ header('Cache-Control: no-store');
 /* Define esse cabeçalho da resposta antes de enviar o conteúdo.
*/ header('X-Content-Type-Options: nosniff');

 /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ function sentia_json(array $data, int $status = 200): void
{
     /* Define o código HTTP da resposta para indicar sucesso ou falha.
*/ http_response_code($status);
     /* Envia esse conteúdo no corpo da resposta HTTP.
*/ echo  /* Converte os dados para JSON para enviar ao JavaScript do site.
*/ json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     /* Encerra a execução deste pedido depois da resposta.
*/ exit;
}

 /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ function sentia_error(string $code, string $message, int $status = 400, array $extra = []): void
{
     /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json( /* Junta os campos recebidos em um novo array.
*/ array_merge([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => false,  /* Reúne os dados que identificam a falha.
*/ 'error' => [ /* Guarda o código de erro que o JavaScript pode reconhecer.
*/ 'code' => $code,  /* Guarda a mensagem apresentada para essa situação.
*/ 'message' => $message]], $extra), $status);
}

 /* Identifica a falha do banco sem mostrar detalhes internos da conexão.
*/ function sentia_database_error(Throwable $error): void
{
     /* Esse comando prepara ou atualiza driverCode com os dados usados nesta operação.
*/ $driverCode = $error instanceof PDOException &&  /* Confere se esse campo existe e não está nulo.
*/ isset($error->errorInfo[1]) ?  /* Converte esse valor para número inteiro.
*/ (int) $error->errorInfo[1] : 0;
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se esse valor está entre as opções aceitas.
*/ in_array($driverCode, [1049, 1146, 1054], true)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('schema_missing', 'O banco do SENTIA precisa ser preparado. Use Preparar banco ou importe banco/schema.sql pelo phpMyAdmin.', 503, [ /* Informa se o banco e a tabela estão prontos para uso.
*/ 'ready' => false]);
    }
     /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('database_unavailable', 'Não foi possível acessar o MySQL. Inicie o MySQL no XAMPP e confira a configuração local da API.', 503, [ /* Informa se o banco e a tabela estão prontos para uso.
*/ 'ready' => false]);
}

 /* Prepara o tratamento das exceções que não forem resolvidas antes.
*/ set_exception_handler( /* Essa função anônima não depende de um objeto externo ligado a ela.
*/ static  /* Essa função agrupa as operações executadas quando for chamada.
*/ function (Throwable $error): void {
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($error instanceof PDOException) {
         /* Identifica a falha do banco sem mostrar detalhes internos da conexão.
*/ sentia_database_error($error);
    }
     /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('server_error', 'Não foi possível concluir a operação. Confira a instalação PHP e a configuração local da API.', 500);
});

 /* Confere se esse endereço aceita o método e a origem do pedido.
*/ function sentia_method(array $allowed): string
{
     /* Esse comando prepara ou atualiza method com os dados usados nesta operação.
*/ $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse valor está entre as opções aceitas.
*/ in_array($method, $allowed, true)) {
         /* Define esse cabeçalho da resposta antes de enviar o conteúdo.
*/ header('Allow: ' .  /* Junta os valores em um texto usando o separador indicado.
*/ implode(', ', $allowed));
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('method_not_allowed', 'Este endereço não aceita esse método.', 405);
    }
                                                                                                      
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($method !== 'GET' &&  /* Confere se esse campo existe e não está nulo.
*/ isset($_SERVER['HTTP_ORIGIN'])) {
         /* Esse comando prepara ou atualiza origin com os dados usados nesta operação.
*/ $origin =  /* Separa as partes do endereço para conferir a origem do pedido.
*/ parse_url($_SERVER['HTTP_ORIGIN']);
         /* Esse comando prepara ou atualiza request com os dados usados nesta operação.
*/ $request =  /* Separa as partes do endereço para conferir a origem do pedido.
*/ parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''));
         /* Esse comando prepara ou atualiza originPort com os dados usados nesta operação.
*/ $originPort = $origin['port'] ?? (($origin['scheme'] ?? '') === 'https' ? 443 : 80);
         /* Esse comando prepara ou atualiza requestPort com os dados usados nesta operação.
*/ $requestPort = $request['port'] ?? (! /* Confere se esse valor está ausente ou é considerado vazio pelo PHP.
*/ empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 443 : 80);
         /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($origin === false || $request === false ||
             /* Converte esse texto para minúsculas antes da comparação.
*/ strtolower($origin['host'] ?? '') !==  /* Converte esse texto para minúsculas antes da comparação.
*/ strtolower($request['host'] ?? '') || $originPort !== $requestPort) {
             /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('origin_not_allowed', 'Abra o SENTIA e a API pelo mesmo endereço local.', 403);
        }
    }
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $method;
}

 /* Carrega e valida os valores usados na conexão com o MySQL.
*/ function sentia_config(): array
{
     /* Mantém o valor dessa variável entre as chamadas da função.
*/ static $config;
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($config !== null) {
         /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $config;
    }
     /* Esse comando prepara ou atualiza config com os dados usados nesta operação.
*/ $config =  /* Carrega o arquivo PHP necessário para continuar essa execução.
*/ require __DIR__ . '/config.php';
     /* Percorre cada campo ou valor dessa lista para conferir ou transformar os dados.
*/ foreach (['host', 'database', 'username', 'password'] as $field) {
         /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse campo existe e não está nulo.
*/ isset($config[$field]) || ! /* Confere se esse valor é texto.
*/ is_string($config[$field])) {
             /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_configuration', 'Confira os campos de api/config.local.php.', 500);
        }
    }
                                                                                                         
     /* Esse comando prepara ou atualiza port com os dados usados nesta operação.
*/ $port =  /* Converte esse valor para texto.
*/ (string) ($config['port'] ?? '');
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere o formato desse texto usando o padrão definido.
*/ preg_match('/\A[a-zA-Z0-9.:-]{1,255}\z/D', $config['host']) ||
        ! /* Confere o formato desse texto usando o padrão definido.
*/ preg_match('/\A[a-zA-Z0-9_]{1,64}\z/D', $config['database']) ||
        ! /* Confere se o texto contém somente dígitos decimais.
*/ ctype_digit($port) ||  /* Converte esse valor para número inteiro.
*/ (int) $port < 1 ||  /* Converte esse valor para número inteiro.
*/ (int) $port > 65535) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_configuration', 'Confira o servidor, a porta e o nome do banco em api/config.local.php.', 500);
    }
     /* Esse comando prepara ou atualiza config com os dados usados nesta operação.
*/ $config['port'] = $port;
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $config;
}

 /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ function sentia_pdo(bool $withDatabase = true): PDO
{
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se essa classe está disponível no PHP instalado.
*/ class_exists('PDO') || ! /* Confere se esse valor está entre as opções aceitas.
*/ in_array('mysql', PDO:: /* Consulta os drivers de banco disponíveis no PDO.
*/ getAvailableDrivers(), true)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('php_mysql_missing', 'Ative a extensão pdo_mysql no PHP do XAMPP e reinicie o Apache.', 503, [ /* Informa se o banco e a tabela estão prontos para uso.
*/ 'ready' => false]);
    }
     /* Esse comando prepara ou atualiza config com os dados usados nesta operação.
*/ $config =  /* Carrega e valida os valores usados na conexão com o MySQL.
*/ sentia_config();
     /* Esse comando prepara ou atualiza dsn com os dados usados nesta operação.
*/ $dsn = 'mysql:host=' . $config['host'] . ';port=' . $config['port'] .
        ($withDatabase ? ';dbname=' . $config['database'] : '') . ';charset=utf8mb4';
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return new  /* Cria a conexão com o MySQL usando o endereço, o usuário e as opções definidos.
*/ PDO($dsn, $config['username'], $config['password'], [
        PDO:: /* Configura o PDO para sinalizar falhas por exceções.
*/ ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO:: /* Configura o formato padrão das linhas retornadas pelo PDO.
*/ ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO:: /* Define se a preparação da consulta é emulada ou feita pelo driver.
*/ ATTR_EMULATE_PREPARES => false,
        PDO:: /* Define o prazo máximo dessa tentativa de conexão.
*/ ATTR_TIMEOUT => 3,
    ]);
}

 /* Lê o JSON enviado e aceita somente os campos permitidos nesse pedido.
*/ function sentia_body(array $allowed): array
{
     /* Esse comando prepara ou atualiza contentType com os dados usados nesta operação.
*/ $contentType =  /* Converte esse texto para minúsculas antes da comparação.
*/ strtolower( /* Retira os espaços extras do começo e do fim desse texto.
*/ trim( /* Separa o texto usando o delimitador indicado.
*/ explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($contentType !== 'application/json') {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('json_required', 'Envie os dados como application/json.', 415);
    }
     /* Esse comando prepara ou atualiza raw com os dados usados nesta operação.
*/ $raw =  /* Lê o corpo do pedido respeitando o limite de tamanho indicado.
*/ file_get_contents('php://input', false, null, 0, 8193);
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($raw === false ||  /* Conta os bytes desse texto para conferir o limite do pedido.
*/ strlen($raw) > 8192) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('body_too_large', 'O pedido ultrapassou o tamanho permitido.', 413);
    }
     /* Esse comando prepara ou atualiza decoded com os dados usados nesta operação.
*/ $decoded =  /* Converte o texto JSON recebido em dados para validar no servidor.
*/ json_decode($raw);
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Consulta se houve uma falha ao converter o JSON.
*/ json_last_error() !== JSON_ERROR_NONE || ! /* Confere se o JSON recebido virou um objeto.
*/ is_object($decoded)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_json', 'Envie um objeto JSON válido.', 400);
    }
     /* Esse comando prepara ou atualiza data com os dados usados nesta operação.
*/ $data =  /* Executa a função get object vars com os valores definidos nessa parte.
*/ get_object_vars($decoded);
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Procura campos que não pertencem à lista de nomes permitidos.
*/ array_diff( /* Reúne os nomes dos campos recebidos no array.
*/ array_keys($data), $allowed)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('unknown_field', 'O pedido contém um campo que não é reconhecido.', 422);
    }
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $data;
}

 /* Confere o tamanho e o formato do identificador do registro.
*/ function sentia_id($value): string
{
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse valor é texto.
*/ is_string($value) || ! /* Confere o formato desse texto usando o padrão definido.
*/ preg_match('/\A[a-zA-Z0-9_-]{1,64}\z/D', $value)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_id', 'O identificador deve ter de 1 a 64 letras, números, traços ou sublinhados.', 422);
    }
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $value;
}

 /* Valida e normaliza o texto de uma ação antes de guardar no banco.
*/ function sentia_text($value): string
{
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se esse valor é texto.
*/ is_string($value) || ! /* Confere o formato desse texto usando o padrão definido.
*/ preg_match('//u', $value)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_text', 'Escreva uma ação em texto UTF-8 válido.', 422);
    }
     /* Esse comando prepara ou atualiza value com os dados usados nesta operação.
*/ $value =  /* Executa a função preg replace com os valores definidos nessa parte.
*/ preg_replace('/\A\s+|\s+\z/u', '', $value);
     /* Esse comando prepara ou atualiza length com os dados usados nesta operação.
*/ $length =  /* Executa a função preg match all com os valores definidos nessa parte.
*/ preg_match_all('/./us', $value);
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($length < 1 || $length > 160 ||  /* Confere o formato desse texto usando o padrão definido.
*/ preg_match('/[\x00-\x1F\x7F]/', $value)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_text', 'A ação precisa ter de 1 a 160 caracteres, sem caracteres de controle.', 422);
    }
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $value;
}

 /* Confere se o estado de conclusão recebido é um valor booleano.
*/ function sentia_done($value): bool
{
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (! /* Confere se o valor recebido é verdadeiro ou falso.
*/ is_bool($value)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_done', 'O campo done deve ser true ou false.', 422);
    }
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $value;
}

 /* Converte a linha do banco para o formato de registro usado pelo site.
*/ function sentia_record(array $row): array
{
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return [ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' =>  /* Converte esse valor para texto.
*/ (string) $row['id'],  /* Guarda o texto da ação validado pelo servidor.
*/ 'text' =>  /* Converte esse valor para texto.
*/ (string) $row['text'],  /* Guarda se essa ação está concluída.
*/ 'done' =>  /* Converte esse valor para verdadeiro ou falso.
*/ (bool) $row['done']];
}

 /* Essa função agrupa as operações executadas quando for chamada.
*/ function sentia_find(PDO $pdo, string $id): ?array
{
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement = $pdo-> /* Prepara a consulta SQL com marcadores, sem juntar o texto do usuário ao comando.
*/ prepare( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'SELECT id, text, done FROM registros WHERE id = :id');
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement-> /* Envia os valores aos marcadores e executa a consulta preparada.
*/ execute([ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' => $id]);
     /* Esse comando prepara ou atualiza row com os dados usados nesta operação.
*/ $row = $statement-> /* Lê a próxima linha do resultado da consulta.
*/ fetch();
     /* Devolve esse resultado e encerra a chamada atual da função.
*/ return $row === false ? null :  /* Converte a linha do banco para o formato de registro usado pelo site.
*/ sentia_record($row);
}
