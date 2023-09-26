import fastify from 'fastify'
const app = fastify();

app.listen({port: 3001}, (err, adress) => {
  if(err){
    console.log(err);
    process.exit(1)
  }
  console.log(`Server run: ${adress}`)
})

export default app