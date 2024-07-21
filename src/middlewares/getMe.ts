const getMe =
  (force = true) =>
  (_to: any, _from: any, next: any) => {
    const store = useStore()

    if (!store.me || force) {
      store.getMe()
    }

    next()
  }

export default getMe
