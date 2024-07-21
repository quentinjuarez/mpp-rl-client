const getEvent = (to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  const eventId = to.params.id

  RLStore.getEvent(eventId)

  next()
}

export default getEvent
