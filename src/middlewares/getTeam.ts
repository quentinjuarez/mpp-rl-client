const getTeam = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getTeam(to.params.slug)

  next()
}

export default getTeam
