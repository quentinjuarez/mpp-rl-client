const getEvent = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getEvent(to.params.id)

  next()
}

export default getEvent
