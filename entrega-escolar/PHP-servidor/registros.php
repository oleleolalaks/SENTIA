<?php
 /* Ativa a conferência estrita dos tipos declarados nas funções deste arquivo.
*/ declare(strict_types=1);
 /* Carrega o arquivo PHP necessário para continuar essa execução.
*/ require __DIR__ . '/_bootstrap.php';
 /* Esse comando prepara ou atualiza method com os dados usados nesta operação.
*/ $method =  /* Confere se esse endereço aceita o método e a origem do pedido.
*/ sentia_method(['GET', 'POST', 'PUT', 'DELETE']);

 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($method === 'GET') {
     /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
     /* Esse comando prepara ou atualiza rows com os dados usados nesta operação.
*/ $rows = $pdo-> /* Executa a consulta de leitura nessa conexão com o MySQL.
*/ query( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'SELECT id, text, done FROM registros ORDER BY created_at ASC, id ASC')-> /* Reúne todas as linhas devolvidas pela consulta.
*/ fetchAll();
     /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Reúne os registros que o banco devolveu.
*/ 'registros' =>  /* Aplica a função indicada a cada linha antes de devolver a lista.
*/ array_map('sentia_record', $rows)]);
}

 /* Esse comando prepara ou atualiza data com os dados usados nesta operação.
*/ $data =  /* Lê o JSON enviado e aceita somente os campos permitidos nesse pedido.
*/ sentia_body($method === 'DELETE' ? ['id', 'all'] : ['id', 'text', 'done']);

 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($method === 'POST') {
     /* Esse comando prepara ou atualiza id com os dados usados nesta operação.
*/ $id =  /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('id', $data) ?  /* Confere o tamanho e o formato do identificador do registro.
*/ sentia_id($data['id']) :  /* Transforma os bytes aleatórios em um identificador hexadecimal.
*/ bin2hex( /* Gera bytes aleatórios para criar um identificador difícil de repetir.
*/ random_bytes(16));
     /* Esse comando prepara ou atualiza text com os dados usados nesta operação.
*/ $text =  /* Valida e normaliza o texto de uma ação antes de guardar no banco.
*/ sentia_text($data['text'] ?? null);
     /* Esse comando prepara ou atualiza done com os dados usados nesta operação.
*/ $done =  /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('done', $data) ?  /* Confere se o estado de conclusão recebido é um valor booleano.
*/ sentia_done($data['done']) : false;
     /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement = $pdo-> /* Prepara a consulta SQL com marcadores, sem juntar o texto do usuário ao comando.
*/ prepare( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'INSERT INTO registros (id, text, done) VALUES (:id, :text, :done)');
     /* Tenta executar essa operação e permite tratar a exceção neste ponto.
*/ try {
         /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement-> /* Envia os valores aos marcadores e executa a consulta preparada.
*/ execute([ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' => $id,  /* Guarda o texto da ação validado pelo servidor.
*/ 'text' => $text,  /* Guarda se essa ação está concluída.
*/ 'done' =>  /* Converte esse valor para número inteiro.
*/ (int) $done]);
    }  /* Recebe a exceção e decide como responder sem expor detalhes internos.
*/ catch (PDOException $error) {
         /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se esse campo existe e não está nulo.
*/ isset($error->errorInfo[1]) &&  /* Converte esse valor para número inteiro.
*/ (int) $error->errorInfo[1] === 1062) {
             /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('id_exists', 'Já existe uma ação com esse identificador.', 409);
        }
         /* Interrompe esse caminho com a exceção indicada para tratar a falha.
*/ throw $error;
    }
     /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Guarda o registro que acabou de ser criado ou atualizado.
*/ 'registro' => [ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' => $id,  /* Guarda o texto da ação validado pelo servidor.
*/ 'text' => $text,  /* Guarda se essa ação está concluída.
*/ 'done' => $done]], 201);
}

 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($method === 'PUT') {
     /* Esse comando prepara ou atualiza id com os dados usados nesta operação.
*/ $id =  /* Confere o tamanho e o formato do identificador do registro.
*/ sentia_id($data['id'] ?? null);
     /* Esse comando prepara ou atualiza fields com os dados usados nesta operação.
*/ $fields = [];
     /* Esse comando prepara ou atualiza values com os dados usados nesta operação.
*/ $values = [ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' => $id];
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('text', $data)) {
         /* Esse comando prepara ou atualiza values com os dados usados nesta operação.
*/ $values['text'] =  /* Valida e normaliza o texto de uma ação antes de guardar no banco.
*/ sentia_text($data['text']);
         /* Esse comando prepara ou atualiza fields com os dados usados nesta operação.
*/ $fields[] = 'text = :text';
    }
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('done', $data)) {
         /* Esse comando prepara ou atualiza values com os dados usados nesta operação.
*/ $values['done'] =  /* Converte esse valor para número inteiro.
*/ (int)  /* Confere se o estado de conclusão recebido é um valor booleano.
*/ sentia_done($data['done']);
         /* Esse comando prepara ou atualiza fields com os dados usados nesta operação.
*/ $fields[] = 'done = :done';
    }
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if (!$fields) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('missing_changes', 'Envie text ou done para alterar a ação.', 422);
    }
     /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
                                                                                                    
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement = $pdo-> /* Prepara a consulta SQL com marcadores, sem juntar o texto do usuário ao comando.
*/ prepare( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'UPDATE registros SET ' .  /* Junta os valores em um texto usando o separador indicado.
*/ implode(', ', $fields) . ' WHERE id = :id');
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement-> /* Envia os valores aos marcadores e executa a consulta preparada.
*/ execute($values);
     /* Esse comando prepara ou atualiza record com os dados usados nesta operação.
*/ $record =  /* Executa a função sentia find com os valores definidos nessa parte.
*/ sentia_find($pdo, $id);
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($record === null) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('not_found', 'Essa ação não está mais no banco.', 404);
    }
     /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Guarda o registro que acabou de ser criado ou atualizado.
*/ 'registro' => $record]);
}

 /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ( /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('all', $data)) {
     /* Confere essa condição e só executa esse caminho quando ela é verdadeira.
*/ if ($data['all'] !== true ||  /* Confere se o campo foi enviado, mesmo quando seu valor está vazio.
*/ array_key_exists('id', $data)) {
         /* Monta a resposta de erro com o código e a mensagem que o site consegue tratar.
*/ sentia_error('invalid_delete', 'Para limpar a lista, envie somente all: true.', 422);
    }
     /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
     /* Esse comando prepara ou atualiza deleted com os dados usados nesta operação.
*/ $deleted = $pdo-> /* Executa essa instrução SQL diretamente nessa conexão.
*/ exec( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'DELETE FROM registros');
}  /* Executa esse outro caminho quando a condição anterior não passou.
*/ else {
     /* Esse comando prepara ou atualiza id com os dados usados nesta operação.
*/ $id =  /* Confere o tamanho e o formato do identificador do registro.
*/ sentia_id($data['id'] ?? null);
     /* Esse comando prepara ou atualiza pdo com os dados usados nesta operação.
*/ $pdo =  /* Abre a conexão PDO com o banco depois de conferir as configurações e o driver.
*/ sentia_pdo();
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement = $pdo-> /* Prepara a consulta SQL com marcadores, sem juntar o texto do usuário ao comando.
*/ prepare( /* Esse texto é a instrução SQL enviada para executar a operação indicada no banco.
*/ 'DELETE FROM registros WHERE id = :id');
     /* Esse comando prepara ou atualiza statement com os dados usados nesta operação.
*/ $statement-> /* Envia os valores aos marcadores e executa a consulta preparada.
*/ execute([ /* Guarda o identificador usado para localizar esse registro.
*/ 'id' => $id]);
     /* Esse comando prepara ou atualiza deleted com os dados usados nesta operação.
*/ $deleted = $statement-> /* Consulta quantas linhas foram afetadas pela operação.
*/ rowCount();
}
 /* Monta a resposta JSON com o status indicado e encerra esse pedido.
*/ sentia_json([ /* Indica se a operação terminou com sucesso.
*/ 'ok' => true,  /* Esse campo associa deleted ao valor definido nesta configuração.
*/ 'deleted' =>  /* Converte esse valor para número inteiro.
*/ (int) $deleted]);
