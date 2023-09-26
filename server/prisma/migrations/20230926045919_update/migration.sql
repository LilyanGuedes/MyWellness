/*
  Warnings:

  - You are about to drop the column `IDUsuario` on the `Exercicios` table. All the data in the column will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Exercicios` DROP FOREIGN KEY `Exercicios_IDUsuario_fkey`;

-- AlterTable
ALTER TABLE `Exercicios` DROP COLUMN `IDUsuario`;

-- DropTable
DROP TABLE `Usuarios`;
