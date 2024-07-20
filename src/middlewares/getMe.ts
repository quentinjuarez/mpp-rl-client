const getMe = (_to: any, _from: any, next: any) => {
  const store = useStore()

  store.getMe()

  next()
}

export default getMe
