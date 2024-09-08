import { defineStore } from 'pinia'

export const useStore = defineStore('mpp-rl-store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight,
    me: null as User | null,
    user: null as User | null,
    token: null as string | null,
    loading: false,
    leaderboard: [] as any[],
    forecasts: [] as Forecast[],
    results: {} as Record<string, Forecast>
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
    async loginGoogle({ code }: { code: string }) {
      try {
        this.$reset()
        const token = await this.$services.users.loginGoogle(code)
        if (!token) return null

        this.token = token
        return this.getMe()
      } catch (error) {
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

        this.me = user
      } catch (error) {
        this.me = null
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

        this.me = user

        return true
      } catch (error) {
        this.me = null
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
    async getForecastPoints(serieId?: number) {
      try {
        const res = await this.$services.forecasts.points(serieId)

        return res.points
      } catch (error) {
        return 0
      }
    },
    async getForecasts(serieId?: number) {
      try {
        const res = await this.$services.forecasts.getAll(serieId)

        this.forecasts = res.forecasts
        return true
      } catch (error) {
        this.forecasts = []
        return false
      }
    },
    async createOrUpdateForecast({
      blue,
      orange,
      matchId,
      tournamentId,
      serieId,
      date
    }: {
      blue: number
      orange: number
      matchId: number
      tournamentId: number
      serieId: number
      date: string
    }) {
      try {
        const res = await this.$services.forecasts.createOrUpdate({
          blue,
          orange,
          matchId,
          tournamentId,
          serieId,
          date
        })

        // mutate forecast array
        const index = this.forecasts.findIndex((f) => f.matchId === matchId)

        if (index === -1) {
          this.forecasts.push(res)
        } else {
          this.forecasts[index] = res
        }

        return res
      } catch (error) {
        return null
      }
    },
    async getLeaderboard(serieId?: number) {
      try {
        const res = await this.$services.users.getLeaderboard(serieId)

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
