import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'file'
  },
  
  server: {
    port: 4321,
    host: true
  },  
site: 'https://dev1.buildly.ph'
});
