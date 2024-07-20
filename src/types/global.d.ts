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
}
