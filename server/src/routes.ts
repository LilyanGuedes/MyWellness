import { FastifyInstance } from 'fastify';

interface ExercicioInterface{
  nomeExercicio: string
  detalhesExercicio?: string
}

// Controllers
import DeletarExercicio from "./controllers/deletarExercicio";
import BuscarExercicios from "./controllers/BuscarExercicios";
import NovoExercicio from "./controllers/NovoExercicio";
import DetalheExercicio from "./controllers/DetalheExercicio";

export default function Routes(app: FastifyInstance) {

app.delete("/exercicio/:id", async (request, reply) => {
  const { id } = request.params as { id: number };
  console.log(id)
  try {
    const result = await DeletarExercicio(id); 
    return result
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while deleting data.' });
  }
});

app.get("/exercicio", async (request, reply) => {    
  try {
    const exercicios = await BuscarExercicios(); 
    return exercicios;
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while fetching data.' });
  }
});

app.post("/exercicio", async (request, reply) => {
  let { nomeExercicio, detalhesExercicio }:ExercicioInterface = request.body as ExercicioInterface
  if(typeof detalhesExercicio === 'undefined' || detalhesExercicio?.length < 1){
    detalhesExercicio = ""
  }
  try {
    const newExercicio = await NovoExercicio(nomeExercicio, detalhesExercicio)
    return reply.send(newExercicio);
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ error: 'An error occurred while inserting data.' });
  }
});

app.patch("/descricao/:id", async (request, reply) => {
  const { detalhesExercicio } = request.body as { detalhesExercicio: string };
  const { id } = request.params as { id: number };
  try {
    const updatedExercicio = await DetalheExercicio(id, detalhesExercicio);
    reply.send(updatedExercicio);
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while updating data.' });
  }
});
}