const getEvent =
  (current = true) =>
  (to: any, _from: any, next: any) => {
    const RLStore = useRLStore()

    RLStore.getEvent(current ? RLStore.currentEvent : to.params.slug)

    next()
  }

export default getEvent
