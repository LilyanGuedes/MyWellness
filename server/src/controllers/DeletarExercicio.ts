import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function DeletarExercicio(id: number) {
  const id2 = String(id)
  return await prisma.exercicios.delete({
    where: { IDExercicio: Number(id2) },
  });
}
