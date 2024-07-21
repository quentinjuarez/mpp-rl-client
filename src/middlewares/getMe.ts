const getMe =
  (force = true) =>
  (_to: any, _from: any, next: any) => {
    const store = useStore()

    if (!store.user || force) {
      store.getMe()
    }

    next()
  }

export default getMe
