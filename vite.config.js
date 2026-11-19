import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { portal: 'index.html', noticias: 'noticias.html' }
    }
  }
});
