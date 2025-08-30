import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,         // Permite usar `test` y `expect` de Vitest sin necesidad de importar nada
    environment: 'jsdom',  // Establece el entorno de pruebas en 'jsdom' si estás probando código del frontend
    coverage: {
      reporter: ['text', 'json', 'html'], // Muestra el reporte de cobertura en la terminal y en formato HTML
      include: ['base-pruebas/SolicitudPrestamos.js', 'base-pruebas/personas.js'],  // Solo rastrear cobertura para estos archivos
      exclude: ['**/node_modules/**', '**/tests/**', '**/src/counter.js', '**/src/main.js'], // Excluir archivos no relevantes
    },
  },
});

