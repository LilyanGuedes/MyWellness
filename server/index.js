const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "01565435",
  database: "treinos"
})

app.delete("/exercicio/:id", (req, res) => {
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

app.post("/descricao", (req, res) => {
  const {details} = req.body;
  let SQL = "INSERT INTO treinoInferiores (detalhes) VALUES (?)";
  db.query(SQL, details, (err, result) => {
    if(err) console.log(err);
    else res.send(result)
  })
})


app.listen(3001, () => {
  console.log("rodando servidor")
})