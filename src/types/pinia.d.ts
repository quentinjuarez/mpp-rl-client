import type UsersService from '@/services/users'
import type ForecastsService from '@/services/forecasts'
import type PandaScoreService from '@/services/ps'

import type { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $router: Router
    $services: {
      users: UsersService
      ps: PandaScoreService
      forecasts: ForecastsService
    }
  }
}
