const getMatch = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getMatch(to.params.slug)

  next()
}

export default getMatch
