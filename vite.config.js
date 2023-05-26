import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'

const root = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, 'dist');

export default defineConfig(({ mode }) => ({
  // base: mode === 'production' ? '/MakeUp/' : '/', // /MakeUp/ added for deploy to gh-pages, remove for hosting
  base: '/',
  root,
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src', 'index.html'),
        portfolio: path.resolve(__dirname, 'src', 'portfolio', 'index.html'),
        contacts: path.resolve(__dirname, 'src', 'contacts', 'index.html'),
        proces: path.resolve(__dirname, 'src', 'prices', 'index.html'),
      },
    },
  },
}));
