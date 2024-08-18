import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import initRouter from './router'
import initPinia from './stores/plugin'
import initI18n from './i18n'
import vClickOutside from './plugins/vClickOutside'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'
import Vue3RouterMiddlewares from 'vue3-router-middlewares'

const app = createApp(App)

const router = initRouter()
app.use(router)
// @ts-expect-error - Vue3RouterMiddlewares is not typed
app.use(Vue3RouterMiddlewares, { router })

const pinia = initPinia(router)

app.use(pinia)

const i18n = initI18n()
app.use(i18n)

app.directive('click-outside', vClickOutside)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{violet.50}',
      100: '{violet.100}',
      200: '{violet.200}',
      300: '{violet.300}',
      400: '{violet.400}',
      500: '{violet.500}',
      600: '{violet.600}',
      700: '{violet.700}',
      800: '{violet.800}',
      900: '{violet.900}',
      950: '{violet.950}'
    }
  }
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'mpp-rl'
    }
  },
  ripple: false
})

app.directive('ripple', {})

app.mount('#app')
