-- CreateTable
CREATE TABLE `Usuarios` (
    `IDUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`IDUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicios` (
    `IDExercicio` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeExercicio` VARCHAR(191) NOT NULL,
    `detalhesExercicio` VARCHAR(191) NOT NULL,
    `IDUsuario` INTEGER NOT NULL,

    PRIMARY KEY (`IDExercicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exercicios` ADD CONSTRAINT `Exercicios_IDUsuario_fkey` FOREIGN KEY (`IDUsuario`) REFERENCES `Usuarios`(`IDUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
