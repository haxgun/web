import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import path from 'node:path'

export default defineConfig({
  site: 'https://haxgun.ru',
  integrations: [sitemap(), vue(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  output: 'static',
})
