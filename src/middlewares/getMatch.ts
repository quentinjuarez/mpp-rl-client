const getMatch = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getMatch(to.params.id)

  next()
}

export default getMatch
