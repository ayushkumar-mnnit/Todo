import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:5173'
    }
  },
  plugins: [react()],
})





/* vite.config.js: This file is used to configure Vite. It allows you to customize the build process, set up plugins, define alias paths, and configure server settings. It's mainly for adjusting how Vite handles your project during development and production. */