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
        const resMatches = await this.$services.rl.eventMatches(id)
        // const resParticipants = await this.$services.rl.eventParticipants(id)

        this.event = {
          ...res,
          // participants: resParticipants.participants,
          matches: resMatches.matches,
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
    async getMatch(id: string) {
      try {
        this.loading = true
        this.match = null
        const res = await this.$services.rl.match(id)
        // const resGames = await this.$services.rl.matchGames(id)

        this.match = {
          ...res,
          // games: resGames.games
          games: []
        }

        return true
      } catch (error) {
        this.match = null
        return false
      } finally {
        this.loading = false
      }
    },
    async getTeam(id: string) {
      try {
        this.loading = true
        const res = await this.$services.rl.team(id)
        const resPlayers = await this.$services.rl.teamPlayers(id)

        this.team = {
          ...res,
          players: resPlayers.players
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
