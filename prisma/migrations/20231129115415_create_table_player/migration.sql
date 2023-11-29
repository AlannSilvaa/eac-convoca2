/*
  Warnings:

  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `player`;

-- CreateTable
CREATE TABLE `jugadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `team` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
