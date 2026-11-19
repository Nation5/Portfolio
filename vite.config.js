import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Site publié sur GitHub Pages : https://nation5.github.io/Portfolio/
export default defineConfig({
  plugins: [react()],
  base: './', // chemins relatifs : fonctionne quel que soit le nom du dépôt
})
