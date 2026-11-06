import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // En desarrollo, las llamadas a /api se reenvían al servidor Node (server/index.js)
    server: { proxy: { '/api': 'http://localhost:3001' } },
  },
});
