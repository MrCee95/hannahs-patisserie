import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // 🔑 lowercase + trailing slash + matches repo name
  base: '/hannahs-patisserie/',
  
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Force clean build every time
  },
  
  // Debug: Log config to confirm it's loaded
  logLevel: 'info',
  customLogger: {
    info: (msg) => {
      if (msg.includes('using resolved config')) {
        console.log('✅ Vite config loaded:', msg);
      }
      console.log(msg);
    },
    warn: console.warn,
    error: console.error,
    clear: console.clear,
    hasErrorLogged: () => false,
  },
});