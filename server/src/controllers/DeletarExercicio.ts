import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function DeletarExercicio(id: number) {
  return await prisma.exercicios.delete({
    where: { IDExercicio: id },
  });
}
