const getMe = (_to: any, _from: any, next: any) => {
  const store = useStore()

  if (!store.user) {
    store.getMe()
  }

  next()
}

export default getMe
