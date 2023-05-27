import fs from 'fs';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

// const html = fs.readFileSync(`${process.cwd()}/dist/index.html`, 'utf-8');
const __dirname = fileURLToPath(path.dirname(import.meta.url));
// console.log(path.resolve(__dirname, '..', 'dist'))
export const options = {
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '..', 'secrets', 'localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'secrets', 'localhost.crt'))
  }
}

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
