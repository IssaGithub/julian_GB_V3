import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  // Site URL can be added later when you have a domain
  // site: 'http://your-domain.com',
  build: {
    assets: 'assets'
  }
});