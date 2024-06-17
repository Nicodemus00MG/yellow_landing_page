// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // Asegúrate de incluir el plugin de React si estás usando React
  server: {
    port: 3000,  // Configura el puerto 3000 para el servidor de desarrollo
    host: '0.0.0.0',  // Permite que el servidor sea accesible desde cualquier dirección IP, incluyendo la red local
  },
});
