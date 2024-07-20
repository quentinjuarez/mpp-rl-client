import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import applyMiddlewares from '@/middlewares'

export default () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  router.beforeEach(applyMiddlewares())

  return router
}
