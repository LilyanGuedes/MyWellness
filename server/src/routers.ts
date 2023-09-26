import app from "..";
import prisma from '@prisma/client'

/** app.delete("/exercicio/:id", (req, reply) => {
  const { id } = req.params;

  let SQL = "DELETE FROM treinoInferiores WHERE id=?";

  db.query(SQL, id, (err, result) => {
    if(err) console.log(err);
    else res.send(result)
  })
})

app.get("/exercicio", (req, res) => {

  let SQL = "SELECT * from treinoInferiores";

  db.query(SQL, (err, result) => {
    if(err) console.log(err);
    else res.send(result)
  })
})

app.post("/exercicio", (req, res) => {
  const { exercicio } = req.body;
  let SQL = "INSERT INTO treinoInferiores ( exercicios ) VALUES (?)";
  db.query(SQL, exercicio, (err, result) => {
    if(err) console.log(err);
    else res.send(result)
  } )
})

app.patch("/descricao/:id", (req, res) => {
  const {details} = req.body;
  const {id} = req.params;
  let SQL = "UPDATE treinoInferiores SET detalhes = ? WHERE id=?";
  db.query(SQL, [details, id], (err, result) => {
    if(err) console.log(err);
    else res.send(result)
  })
}) */

app.get("/", (req, reply) => {
  prisma
  if(){

    reply.status(200).send('Funcionou')
  }
})
