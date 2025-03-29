import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/HRMS/',  // 👈 Replace with your actual repo name
  plugins: [react()],
});
