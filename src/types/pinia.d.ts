import type UsersService from '@/services/users'
import type RLService from '@/services/rl'

import type { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $router: Router
    $services: {
      users: UsersService
      rl: RLService
    }
  }
}
