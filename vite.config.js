import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const root = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, 'dist');

export default defineConfig(({ mode }) => ({
  // base: mode === 'production' ? '/MakeUp/' : '', // /MakeUp/ added for deploy to gh-pages, remove for hosting
  root,
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
  plugins: [react()],
}));
