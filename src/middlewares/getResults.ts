const getResults = (_to: any, _from: any, next: any) => {
  const RLStore = useRLStore()
  const store = useStore()

  RLStore.getResults()
  store.getForecastResults()

  next()
}

export default getResults
