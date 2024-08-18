const getLeaderboard = (_to: any, _from: any, next: any) => {
  const store = useStore()
  const RLStore = useRLStore()

  store.getLeaderboard(RLStore.currentEvent)
  next()
}

export default getLeaderboard
