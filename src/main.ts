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
app.use(Vue3RouterMiddlewares, { router })

const pinia = initPinia(router)

app.use(pinia)

const i18n = initI18n()
app.use(i18n)

app.directive('click-outside', vClickOutside)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#1778f7',
      100: '#1778f7',
      200: '#1778f7',
      300: '#1778f7',
      400: '#1778f7',
      500: '#1778f7',
      600: '#1778f7',
      700: '#1778f7',
      800: '#1778f7',
      900: '#1778f7',
      950: '#1778f7'
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
