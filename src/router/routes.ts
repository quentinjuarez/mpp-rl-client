import isAuth from '@/middlewares/isAuth'
import getMe from '@/middlewares/getMe'
import getEvent from '@/middlewares/getEvent'
import getEvents from '@/middlewares/getEvents'
import getMatch from '@/middlewares/getMatch'
import getMatches from '@/middlewares/getMatches'
import getLeaderboard from '@/middlewares/getLeaderboard'
import getForecasts from '@/middlewares/getForecasts'
import getUser from '@/middlewares/getUser'
import getTeam from '@/middlewares/getTeam'
import getResults from '@/middlewares/getResults'

const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/home.vue'),
        meta: {
          middlewares: [isAuth, getMe(false)]
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/profile.vue'),
        meta: {
          middlewares: [isAuth, getMe(true)]
        }
      },
      {
        path: 'leaderboard',
        name: 'leaderboard',
        component: () => import('@/pages/leaderboard.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getLeaderboard]
        }
      },
      {
        path: 'forecasts',
        name: 'forecasts',
        component: () => import('@/pages/forecasts.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getForecasts, getMatches]
        }
      },
      {
        path: 'users/:username',
        name: 'user',
        component: () => import('@/pages/user.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getUser]
        }
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('@/pages/events.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getEvents]
        }
      },
      {
        path: 'events/:id',
        name: 'event',
        component: () => import('@/pages/event.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getEvent]
        }
      },
      {
        path: 'results',
        name: 'results',
        component: () => import('@/pages/results.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getResults]
        }
      },
      {
        path: 'matches/:id',
        name: 'match',
        component: () => import('@/pages/match.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getMatch]
        }
      },
      {
        path: 'teams/:id',
        name: 'team',
        component: () => import('@/pages/team.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getTeam]
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
    meta: {}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/register.vue'),
    meta: {}
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/pages/logout.vue'),
    meta: {}
  },
  // NOT FOUND
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/error.vue')
  }
]

export default routes
