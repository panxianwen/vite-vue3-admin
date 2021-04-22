import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImport from 'vite-plugin-babel-import'
import path from 'path'

const baseUrl = {
  development: './',
  beta: './',
  release: './'
}

export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vitePluginImport([
        {
          libraryName: 'element-plus',
          libraryDirectory: 'es',
          style(name) {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ])
    ],
    base: baseUrl[mode],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
