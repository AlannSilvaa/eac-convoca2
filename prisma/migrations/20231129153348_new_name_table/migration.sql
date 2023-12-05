/*
  Warnings:

  - You are about to drop the column `age` on the `jugadores` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `jugadores` table. All the data in the column will be lost.
  - You are about to drop the column `team` on the `jugadores` table. All the data in the column will be lost.
  - Added the required column `edad` to the `jugadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipo` to the `jugadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `jugadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jugadores` DROP COLUMN `age`,
    DROP COLUMN `firstname`,
    DROP COLUMN `team`,
    ADD COLUMN `edad` INTEGER NOT NULL,
    ADD COLUMN `equipo` VARCHAR(191) NOT NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
