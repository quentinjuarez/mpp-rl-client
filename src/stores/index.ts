import { defineStore } from 'pinia'

export const useStore = defineStore('mpp-rl-store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight,
    user: null as User | null,
    token: null as string | null,
    loading: false,
    leaderboard: [] as any[]
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    async login({ email, password }: { email: string; password: string }) {
      try {
        const res = await this.$services.users.login({ email, password })

        this.token = res

        return true
      } catch (error) {
        this.user = null
        this.token = null

        return false
      }
    },
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
      try {
        const res = await this.$services.users.register({
          firstName,
          lastName,
          email,
          password
        })
        this.token = res

        return true
      } catch (error) {
        this.user = null
        this.token = null

        return false
      }
    },
    async logout() {
      this.user = null
      this.token = null

      this.$router.push('/')
    },
    async getMe() {
      try {
        this.loading = true
        const user = await this.$services.users.getMe()

        this.user = user
      } catch (error) {
        this.user = null
        this.token = null
      } finally {
        this.loading = false
      }
    },
    async checkUsername(username: string) {
      try {
        const res = await this.$services.users.checkUsername(username)

        return res
      } catch (error) {
        return false
      }
    },
    async updateMe({ username }: { username: string }) {
      try {
        const user = await this.$services.users.updateMe({ username })

        this.user = user

        return true
      } catch (error) {
        return false
      }
    },
    async updatePassword({
      oldPassword,
      newPassword
    }: {
      oldPassword: string
      newPassword: string
    }) {
      try {
        await this.$services.users.updatePassword({ oldPassword, newPassword })

        return true
      } catch (error) {
        return false
      }
    },
    async getForecastPoints() {
      try {
        const res = await this.$services.forecasts.points()

        return res.points
      } catch (error) {
        return 0
      }
    },
    async getForecasts() {
      try {
        const res = await this.$services.forecasts.getAll()

        return res.forecasts
      } catch (error) {
        return []
      }
    },
    async createOrUpdateForecast({
      blue,
      orange,
      matchId,
      eventId
    }: {
      blue: number
      orange: number
      matchId: string
      eventId: string
    }) {
      try {
        await this.$services.forecasts.createOrUpdate({ blue, orange, matchId, eventId })

        return true
      } catch (error) {
        return false
      }
    },
    async getLeaderboard() {
      try {
        const res = await this.$services.users.getLeaderboard()

        this.leaderboard = res.leaderboard

        return true
      } catch (error) {
        this.leaderboard = []
        return false
      }
    },
    async getUser(username: string) {
      try {
        this.loading = true
        const user = await this.$services.users.get(username)

        this.user = user
      } catch (error) {
        this.user = null
      } finally {
        this.loading = false
      }
    }
  },
  persist: {
    key: `mpp-rl-store`
  },
  share: {
    enable: false
  }
})
