-- Esse comando cria o banco sentia somente se ele ainda não existir, sem apagar um banco já criado.
CREATE DATABASE IF NOT EXISTS `sentia`
  -- Aqui utf8mb4 permite guardar os caracteres Unicode, e a comparação de texto usa a collation indicada.
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- Esse comando escolhe o banco sentia para os próximos comandos desta conexão.
USE `sentia`;

-- Essa parte cria a tabela de registros somente quando ela ainda não existe, preservando os registros já guardados.
CREATE TABLE IF NOT EXISTS `registros` (
  -- Esse campo guarda o identificador com até sessenta e quatro caracteres, a comparação binária diferencia maiúsculas e minúsculas, e NOT NULL exige um valor não nulo.
  `id` VARCHAR(64) COLLATE utf8mb4_bin NOT NULL,
  -- Aqui fica o texto de cada ação com até cento e sessenta caracteres, e NOT NULL impede que o campo receba um valor nulo.
  `text` VARCHAR(160) NOT NULL,
  -- Esse campo usa um inteiro pequeno para a conclusão, começa em zero e não aceita valor nulo, a API confere o estado recebido antes de gravar.
  `done` TINYINT(1) NOT NULL DEFAULT 0,
  -- Essa coluna registra o instante da criação, usando o horário atual quando nenhum outro valor é enviado.
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  -- Aqui fica o instante da última alteração, ele começa no horário atual e o MySQL o atualiza quando a linha muda.
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  -- Esse comando faz do identificador a chave primária, então duas linhas não podem usar o mesmo identificador.
  PRIMARY KEY (`id`)
-- Essa parte escolhe InnoDB como motor da tabela e mantém utf8mb4 e a comparação indicada como padrões de texto.
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
