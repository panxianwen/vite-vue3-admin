import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImport from 'vite-plugin-babel-import'
import path from 'path'
import { wrapperEnv } from './src/config/env'

/* const baseUrl = {
  development: '/',
  beta: '/',
  release: '/'
} */

export default ({ mode }: ConfigEnv) =>
  defineConfig(() => {
    const root = process.cwd()
    const env = loadEnv(mode, root)

    // The boolean type read by loadEnv is a string, this function can converted to boolean type
    const viteEnv = wrapperEnv(env)

    const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv

    return {
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
      //base: baseUrl[mode],
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: {
          '~': path.resolve(__dirname, './'),
          '@': path.resolve(__dirname, 'src'),
          '#': path.resolve(__dirname, 'types')
        }
      },
      server: {
        port: VITE_PORT,
        proxy: {
          '/api': {
            target: '',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
    }
  })
