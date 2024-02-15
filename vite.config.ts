import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/betrayal-at-house-on-the-hill-guide/',

  resolve: {
    alias: {
      '@src': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
});
