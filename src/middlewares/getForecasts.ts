const getForecasts = (to: any, from: any, next: any) => {
  if (to.name === from.name) return next()

  const store = useStore()

  store.getForecasts()
  next()
}

export default getForecasts
