import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy:{
      '/api' : "http://localhost:8000"
      // TODO: Always set proxy in vite.config and not in package.json 
    }
  }
})
