import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  clearScreen: false,
  plugins: [
    tailwindcss(),
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
      strictMessage: false,
      escapeHtml: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
})
