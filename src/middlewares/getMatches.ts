const getMatches = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  const dev = to.query.mode === 'dev'

  RLStore.getMatches(dev)

  next()
}

export default getMatches
