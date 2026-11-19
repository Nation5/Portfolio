import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// "base" = nom du dépôt GitHub, pour GitHub Pages (https://nation5.github.io/portfolio/)
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
