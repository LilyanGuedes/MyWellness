import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function NovoExercicio(nomeExercicio: string, detalhesExercicio: string) {
    return await prisma.exercicios.create({
      data: {
        nomeExercicio,
        detalhesExercicio,
      }
    });
  }
  