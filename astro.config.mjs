import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.brandonmweaver.com',
  integrations: [sitemap()],
  // Static by default. The two pages that show the Substack feed render on demand and are cached for an hour.
  adapter: vercel({ isr: { expiration: 3600 } }),
  build: { inlineStylesheets: 'auto' },
  redirects: { '/writing': '/thought-leadership', '/work': '/experience' },
});
