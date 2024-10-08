import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import AutoImport from 'unplugin-auto-import/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vitejs.dev/config/
export default () => {
  const isDev = process.env.NODE_ENV !== 'production'

  return defineConfig({
    server: {
      port: 6001
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    define: {
      __DEV__: isDev
    },
    plugins: [
      AutoImport({
        imports: [
          { pinia: ['storeToRefs'] },
          'vue',
          { 'vue-i18n': ['useI18n'] },
          { 'vue-router': ['useRouter', 'useRoute'] }
        ],
        dirs: ['./src/stores', './src/utils', './src/composables'],
        dts: './src/types/auto-imports.d.ts',
        vueTemplate: true
      }),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
        runtimeOnly: false
      }),
      Components({
        resolvers: [PrimeVueResolver()],
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: './src/types/components.d.ts'
      }),
      vue()
    ]
  })
}
