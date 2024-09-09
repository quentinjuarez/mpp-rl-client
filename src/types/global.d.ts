export {}

declare global {
  const __DEV__: boolean

  type User = {
    _id: number
    username: string
    firstName: string
    lastName: string
    email: string
  }

  type Forecast = {
    _id: number
    blue: number
    orange: number
    matchId: number
    tournamentId: number
    serieId: number
    userId: number
    processed: boolean
    correct: boolean
    exact: boolean
    match?: PSMatch
  }
}
