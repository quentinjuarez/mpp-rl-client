const getTeam = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getTeam(to.params.id)

  next()
}

export default getTeam
