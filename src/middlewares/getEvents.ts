const getEvents = (_to: any, _from: any, next: any) => {
  const RLStore = useRLStore()

  RLStore.getEvents()

  next()
}

export default getEvents
