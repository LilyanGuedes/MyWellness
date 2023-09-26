import fastify from 'fastify';
import Routes from './src/routes'

const app = fastify();
Routes(app)

app.listen(3001).then((address) => {
    console.log(`Server running at: ${address}`);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

export default app;
