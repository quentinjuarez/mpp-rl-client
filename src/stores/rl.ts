import { defineStore } from 'pinia'

export const useRLStore = defineStore('mpp-rl-data', {
  state: () => ({
    loading: false,
    events: [] as RLEvent[],
    event: null as RLEnrichedEvent | null,
    matches: [] as RLMatch[]
  }),
  getters: {},
  actions: {
    async getEvents() {
      try {
        this.loading = true
        const res = await this.$services.rl.events()

        this.events = res.events

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
        const resParticipants = await this.$services.rl.eventParticipants(id)

        this.event = {
          ...res,
          participants: resParticipants.participants,
          matches: resMatches.matches
        }

        return true
      } catch (error) {
        this.event = null
        this.matches = []
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
