-- Importe no phpMyAdmin do XAMPP. Executar novamente preserva os registros existentes.
CREATE DATABASE IF NOT EXISTS `sentia`
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `sentia`;

CREATE TABLE IF NOT EXISTS `registros` (
  `id` VARCHAR(64) COLLATE utf8mb4_bin NOT NULL,
  `text` VARCHAR(160) NOT NULL,
  `done` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
