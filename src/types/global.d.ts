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
    matchSlug: string
    eventSlug: string
    userId: number
    processed: boolean
    correct: boolean
    exact: boolean
  }
}
