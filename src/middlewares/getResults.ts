const getResults = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()
  const store = useStore()

  const date = to.query.date as string | undefined

  RLStore.getResults(date)
  store.getForecastResults()

  next()
}

export default getResults
