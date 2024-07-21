import { NavigationGuardNext } from 'vue-router'

const getUser = async (to: any, _from: any, next: NavigationGuardNext) => {
  const store = useStore()

  store.getUser(to.params.username)
  next()
}

export default getUser
