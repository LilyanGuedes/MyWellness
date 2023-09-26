import { FastifyInstance } from 'fastify';

// Controllers
import DeletarExercicio from "./controllers/deletarExercicio";
import BuscarExercicios from "./controllers/BuscarExercicios";
import NovoExercicio from "./controllers/NovoExercicio";
import DetalheExercicio from "./controllers/DetalheExercicio";

export default function Routes(app: FastifyInstance) {

app.delete("/exercicio/:id", async (request, reply) => {
  const { id } = request.params as { id: number };
  try {
    const result = await DeletarExercicio(id); 
    reply.send(result);
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while deleting data.' });
  }
});

app.get("/exercicio", async (request, reply) => {    
  try {
    const exercicios = await BuscarExercicios(); 
    reply.send(exercicios);
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while fetching data.' });
  }
});

app.post("/exercicio", async (request, reply) => {
  const { nomeExercicio } = request.body as { nomeExercicio: string };
  const detalhesExercicio: string =  '';
  try {
    const newExercicio = await NovoExercicio(nomeExercicio, detalhesExercicio)
    reply.send(newExercicio);
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'An error occurred while inserting data.' });
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