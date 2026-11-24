-- Execute no phpMyAdmin do banco selecionado. Esta consulta não altera os dados.
-- Use somente as mensagens e ações fictícias que você enviou durante a demonstração.

-- Confere a estrutura usada pelos dois formulários.
SHOW COLUMNS FROM `registros`;
SHOW COLUMNS FROM `contatos`;

-- Mostra contagens sem incluir o conteúdo de mensagens ou endereços de e-mail.
SELECT COUNT(*) AS `total_tarefas`, SUM(`done` = 1) AS `tarefas_concluidas` FROM `registros`;
SELECT COUNT(*) AS `total_contatos` FROM `contatos`;

-- Confere os recibos de contato sem reproduzir os dados pessoais enviados.
SELECT `id`, `created_at` FROM `contatos` ORDER BY `created_at` DESC LIMIT 10;

-- Linhas antigas não são entregues a novas sessões. Elas continuam no banco para migração manual pelo responsável.
SELECT COUNT(*) AS `tarefas_legadas_preservadas` FROM `registros` WHERE `owner_hash` = '';
