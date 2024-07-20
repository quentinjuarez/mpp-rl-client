import { AxiosInstance } from 'axios'

class UsersService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async login({ email, password }: { email: string; password: string }) {
    const res = await this.client.post<string>('/auth/login', {
      email,
      password
    })

    return res.data
  }

  async register({
    firstName,
    lastName,
    email,
    password
  }: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) {
    const res = await this.client.post<string>('/auth/register', {
      firstName,
      lastName,
      email,
      password
    })

    return res.data
  }

  async getMe() {
    const res = await this.client.get<User>('/users/me')

    return res.data
  }
}

export default UsersService
