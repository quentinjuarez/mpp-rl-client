const getForecasts = (_to: any, _from: any, next: any) => {
  const store = useStore()

  store.getForecasts()
  next()
}

export default getForecasts
