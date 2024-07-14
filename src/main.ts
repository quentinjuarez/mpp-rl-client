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

const app = createApp(App)

const router = initRouter()
app.use(router)

const pinia = initPinia(router)

app.use(pinia)

const i18n = initI18n()
app.use(i18n)

app.directive('click-outside', vClickOutside)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}'
    }
  }
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'mpp-rl'
    }
  }
})

app.mount('#app')
