import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' ensures assets are linked relatively, 
  // which is required for GitHub Pages (e.g. username.github.io/repo-name/)
  base: './',
});