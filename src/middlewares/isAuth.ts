const isAuth = (to: any, _from: any, next: any) => {
  const store = useStore()

  if (store.isAuthenticated) {
    next()
  } else {
    const redirect = to.name === 'index' ? undefined : to.fullPath
    next({
      name: 'login',
      query: {
        redirect
      }
    })
  }
}

export default isAuth
