import { defineStore } from 'pinia'

export const useRLStore = defineStore('mpp-rl-data', {
  state: () => ({
    loading: false,
    focusSerieId: 7907,
    // cache infos
    serie: null as PSSerie | null,
    teams: null as PSTeam[] | null
  }),
  getters: {},
  actions: {
    async getSerie() {
      try {
        this.loading = true
        const res = await this.$services.ps.serie(this.focusSerieId)

        this.serie = res

        return true
      } catch (error) {
        this.serie = null
        return false
      } finally {
        this.loading = false
      }
    },
    async getUpcomingMatches() {
      try {
        const res = await this.$services.ps.upcomingMatches(this.focusSerieId)

        return res.matches
      } catch (error) {
        return null
      }
    },
    async getPastMatches() {
      try {
        const res = await this.$services.ps.pastMatches(this.focusSerieId)

        return res.matches
      } catch (error) {
        return null
      }
    },
    async getTeams() {
      try {
        this.loading = true
        const res = await this.$services.ps.teams()

        this.teams = res.teams

        return true
      } catch (error) {
        this.teams = []
        return false
      } finally {
        this.loading = false
      }
    }
  },
  persist: {
    key: `mpp-rl-data`
  },
  share: {
    enable: false
  }
})
