import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //这个path用到了上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    {
      ...viteCompression(),
      apply: 'build'
    }
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': path.resolve('./src'), // @代替src
      '#': path.resolve('./types') // #代替types
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    https: false,
    proxy: {
      '/mock': {
        target: 'https://mock.mengxuegu.com/mock/645e56847ba95d67784d6d5b/mock',
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(/^\/mock/, '/')
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          elementIcons: ['@element-plus/icons-vue']
        }
      }
    }
  }
})
