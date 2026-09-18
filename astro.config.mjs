import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap()
  ],

  server: {
    port: 4321,
    host: true
  },

  site: 'https://dev1.buildly.ph'
});
