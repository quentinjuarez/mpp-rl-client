import { defineStore } from 'pinia'

export const useRLStore = defineStore('mpp-rl-data', {
  state: () => ({
    loading: false,
    currentEvent: '8b0a-rlcs-2024-world-championship',
    events: [] as RLEvent[],
    event: null as RLEnrichedEvent | null,
    matches: [] as RLMatch[],
    match: null as RLEnrichedMatch | null,
    team: null as RLEnrichedTeam | null
  }),
  getters: {},
  actions: {
    async getEvents() {
      try {
        this.loading = true
        const { data } = await this.$services.rl.events()

        this.events = data

        return true
      } catch (error) {
        this.events = []
        return false
      } finally {
        this.loading = false
      }
    },
    async getEvent(id: string) {
      try {
        this.event = null
        this.loading = true
        const res = await this.$services.rl.event(id)
        const { data: resMatches } = await this.$services.rl.eventMatches(id)

        this.event = {
          ...res,
          matches: resMatches,
          participants: []
        }

        return true
      } catch (error) {
        this.event = null
        this.matches = []
        return false
      } finally {
        this.loading = false
      }
    },
    async getMatches() {
      try {
        this.loading = true
        const { data } = await this.$services.rl.matches(this.currentEvent)

        this.matches = data

        return true
      } catch (error) {
        this.matches = []
        return false
      } finally {
        this.loading = false
      }
    },
    async getResults() {
      try {
        this.loading = true
        const { data } = await this.$services.rl.results(this.currentEvent)

        const realMatches = data.filter((m) => m.blue)

        this.matches = realMatches

        return true
      } catch (error) {
        this.matches = []
        return false
      } finally {
        this.loading = false
      }
    },
    async getMatch(slug: string) {
      try {
        this.loading = true
        this.match = null
        const res = await this.$services.rl.match(slug)

        this.match = res

        return true
      } catch (error) {
        this.match = null
        return false
      } finally {
        this.loading = false
      }
    },
    async getTeam(slug: string) {
      try {
        this.loading = true
        const res = await this.$services.rl.team(slug)
        const { data: resPlayers } = await this.$services.rl.teamPlayers(slug)

        this.team = {
          ...res,
          players: resPlayers
        }

        return true
      } catch (error) {
        this.team = null
        return false
      } finally {
        this.loading = false
      }
    },
    async search() {
      try {
        this.loading = true
        await this.$services.rl.search()

        return true
      } catch (error) {
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
