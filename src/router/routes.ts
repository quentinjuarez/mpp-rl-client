import isAuth from '@/middlewares/isAuth'
import getMe from '@/middlewares/getMe'

const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: {
      middlewares: [isAuth, getMe]
    }
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
  // NOT FOUND
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/error.vue')
  }
]

export default routes
