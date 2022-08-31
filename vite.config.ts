import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
const config = loadEnv('development', './')
const port = 8081
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port,
    open: true,
    proxy: {
      // 详情参阅: https://cn.vitejs.dev/config/server-options.html
      [config.VITE_APP_BASE_API]: {
        // 这里以天天基金网的接口为示例
        target: 'https://api.fund.eastmoney.com',
        changeOrigin: true, // 是否跨域
        rewrite: (path) => path.replace(config.VITE_APP_BASE_API, '') // 重写路由路径
      }
    }
  }
})
