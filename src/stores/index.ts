import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight,
    user: null as User | null,
    token: null as string | null,
    loading: false
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
    }
  },
  persist: {
    key: `mpp-rl-store`
  },
  share: {
    enable: false
  }
})
