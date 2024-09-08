import isAuth from '@/middlewares/isAuth'
import getMe from '@/middlewares/getMe'
import getLeaderboard from '@/middlewares/getLeaderboard'
import getForecasts from '@/middlewares/getForecasts'
import getUser from '@/middlewares/getUser'

const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: { name: 'forecasts' },
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
          middlewares: [isAuth, getMe(false), getForecasts]
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
        path: 'results',
        name: 'results',
        component: () => import('@/pages/results.vue'),
        meta: {
          middlewares: [isAuth, getMe(false), getForecasts]
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

  {
    path: '/oauth/google',
    name: 'oauth-google',
    component: () => import('@/pages/google.vue'),
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
