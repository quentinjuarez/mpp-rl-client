const getMatches = (_to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getMatches()

  next()
}

export default getMatches
