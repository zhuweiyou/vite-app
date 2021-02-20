import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vue from '@vitejs/plugin-vue'
import { injectHtml } from 'vite-plugin-html'
import path from 'path'
import autoprefixer from 'autoprefixer'
import glob from 'glob'

const resolve = pathSegments => path.resolve(__dirname, pathSegments)
const prod = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: prod ? '/vite-app/' : '/',
  plugins: [
    vue(),
    reactRefresh(),
    injectHtml({
      injectData: {
        head: `
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        `
      }
    }),
    legacy()
  ],
  root: resolve('src'),
  publicDir: resolve('public'),
  build: {
    outDir: resolve('dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync('src/**/*.html').reduce((obj, item) => {
        const name = item
          .split(path.sep)
          .slice(1)
          .join('-')
          .replace(/\.html$/i, '')
        obj[name] = resolve(item)
        return obj
      }, {})
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
})
