import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function BuscarExercicios() {
  return await prisma.exercicios.findMany();
}

