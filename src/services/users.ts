import type { AxiosInstance } from 'axios'

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

  async checkUsername(username: string) {
    const res = await this.client.post<boolean>(`/users/username/check`, {
      username
    })

    return res.data
  }

  async updateMe({ username }: { username: string }) {
    const res = await this.client.post<User>('/users/me', {
      username
    })

    return res.data
  }

  async updatePassword({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) {
    const res = await this.client.post<User>('/users/me/password', {
      oldPassword,
      newPassword
    })

    return res.data
  }

  async getLeaderboard() {
    const res = await this.client.get<{ leaderboard: any[] }>('/users/leaderboard')

    return res.data
  }

  async get(username: string) {
    const res = await this.client.get<User>(`/users/${username}`)

    return res.data
  }
}

export default UsersService
