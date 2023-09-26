import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function NovoExercicio(nomeExercicio: string, detalhesExercicio: string, IDUsuario: number) {
    return await prisma.exercicios.create({
      data: {
        nomeExercicio,
        detalhesExercicio,
        IDUsuario
      }
    });
  }
  