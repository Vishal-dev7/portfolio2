import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
     base:process.loadEnvFile.VITE_BASE_PATH ,
})
// vite.config.js
// export default {
//   assetsInclude: ['**/*.glb']
// }
