import isAuth from '@/middlewares/isAuth'
import getMe from '@/middlewares/getMe'
import getEvent from '@/middlewares/getEvent'

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
          middlewares: [isAuth, getMe]
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/profile.vue'),
        meta: {
          middlewares: [isAuth, getMe]
        }
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('@/pages/events.vue'),
        meta: {
          middlewares: [isAuth, getMe]
        }
      },
      {
        path: 'events/:id',
        name: 'event',
        component: () => import('@/pages/event.vue'),
        meta: {
          middlewares: [isAuth, getMe, getEvent]
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
