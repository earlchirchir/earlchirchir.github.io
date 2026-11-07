import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        projects: 'projects.html',
        experience: 'experience.html',
        credentials: 'credentials.html',
        cv: 'cv.html',
        notFound: '404.html',
      },
    },
  },
});
