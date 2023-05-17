import fs from 'fs';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

// const html = fs.readFileSync(`${process.cwd()}/dist/index.html`, 'utf-8');
const __dirname = fileURLToPath(path.dirname(import.meta.url));
// console.log(path.resolve(__dirname, '..', 'dist'))

const app = async (fastify, opts) => {
  fastify.register(fastifyStatic, {
    root: path.resolve(__dirname, '..', 'dist'),
    // prefix: '/dist/', // optional: default '/'
    // constraints: { host: 'example.com' } // optional: default {}
  });

  fastify.get('/', async (request, reply) => {
    return reply.sendFile('index.html');
  })
}

export default app;
