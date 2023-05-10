import fs from 'fs';

const html = fs.readFileSync(`${process.cwd()}/public/index.html`, 'utf-8');

const app = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    reply.type('text/html');

    reply.send(html);
  })
}

export default app;
