import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.brandonmweaver.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  redirects: { '/writing': '/thought-leadership' },
});
