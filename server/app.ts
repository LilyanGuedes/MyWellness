import fastify from 'fastify';
import Routes from './src/routes'
import cors from '@fastify/cors'

const app = fastify();

app.register(cors, { 
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['*'] 
})

Routes(app)

app.listen({
  port:3001,
  host:"0.0.0.0"
}).then((address) => {
    console.log(`Server running at: ${address}`);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

export default app;
