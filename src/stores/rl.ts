import { defineStore } from 'pinia'

export const useRLStore = defineStore('mpp-rl-data', {
  state: () => ({
    loading: false,
    focusSerieId: 7907,
    // cache infos
    serie: {
      begin_at: '2024-09-10T16:00:00Z',
      end_at: '2024-09-16T01:00:00Z',
      full_name: '2024',
      id: 7907,
      league_id: 4834,
      modified_at: '2024-08-30T08:26:14Z',
      name: '',
      season: null,
      slug: 'rl-rlcs-world-championship-2024',
      winner_id: null,
      winner_type: 'Team',
      year: 2024
    } as PSSerie | null,
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
