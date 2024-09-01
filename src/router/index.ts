import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes as unknown as any
  })

  return router
}
