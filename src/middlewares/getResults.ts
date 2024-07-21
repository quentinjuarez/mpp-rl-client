const getResults = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  const date = to.query.date as string | undefined

  RLStore.getResults(date)

  next()
}

export default getResults
