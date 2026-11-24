-- Selecione primeiro o banco criado no painel ou no XAMPP e depois importe este arquivo.
-- Não há criação, seleção ou remoção de banco aqui. Os dados existentes são preservados.

-- Cada navegador consulta e altera somente as tarefas vinculadas à sua sessão.
CREATE TABLE IF NOT EXISTS `registros` (
  `id` VARCHAR(64) COLLATE utf8mb4_bin NOT NULL,
  `text` VARCHAR(160) NOT NULL,
  `done` TINYINT(1) NOT NULL DEFAULT 0,
  `owner_hash` CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL DEFAULT '',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_registros_owner` (`owner_hash`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- O contato é salvo de verdade, mas sua leitura não fica disponível em um endpoint público.
CREATE TABLE IF NOT EXISTS `contatos` (
  `id` CHAR(32) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `owner_hash` CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `nome` VARCHAR(80) NOT NULL,
  `email` VARCHAR(160) NOT NULL,
  `mensagem` TEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_contatos_owner` (`owner_hash`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Se a tabela antiga já existia, acrescenta o vínculo sem apagar ou atribuir seus dados a qualquer visitante.
-- A consulta ao catálogo torna a importação repetível em MySQL e MariaDB.
SET @sentia_migration = (
  SELECT IF(COUNT(*) = 0,
    'ALTER TABLE `registros` ADD COLUMN `owner_hash` CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL DEFAULT ''''',
    'SELECT 1')
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'registros' AND COLUMN_NAME = 'owner_hash'
);
PREPARE sentia_statement FROM @sentia_migration;
EXECUTE sentia_statement;
DEALLOCATE PREPARE sentia_statement;

-- O índice acelera a consulta sem tornar as tarefas de outros navegadores visíveis.
SET @sentia_migration = (
  SELECT IF(COUNT(*) = 0,
    'CREATE INDEX `idx_registros_owner` ON `registros` (`owner_hash`)',
    'SELECT 1')
  FROM information_schema.STATISTICS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'registros' AND INDEX_NAME = 'idx_registros_owner'
);
PREPARE sentia_statement FROM @sentia_migration;
EXECUTE sentia_statement;
DEALLOCATE PREPARE sentia_statement;
