import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default async function DetalheExercicio(id: number, detalhesExercicio: string) {
  return await prisma.exercicios.update({
    where: { IDExercicio: id },
    data: {
      detalhesExercicio
    }
  });
}
