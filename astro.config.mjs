import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    // Customize sitemap generation
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    // Exclude admin or private pages if any
    filter: (page) => !page.includes('/admin/')
  })],
  output: 'static',
  site: 'https://www.julian-gorreja-gartenbau.de', // Replace with your actual domain
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
});