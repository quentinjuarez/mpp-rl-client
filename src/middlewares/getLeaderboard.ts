const getLeaderboard = (_to: any, _from: any, next: any) => {
  const store = useStore()

  store.getLeaderboard()
  next()
}

export default getLeaderboard
