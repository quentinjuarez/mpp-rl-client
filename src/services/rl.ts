import type { AxiosInstance } from 'axios'

class RLService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async events() {
    const res = await this.client.get<PaginatedResponse<{ events: RLEvent[] }>>('/events', {
      params: {
        name: 'RLCS',
        after: new Date('2024-05-01').toISOString(),
        order: 'asc',
        mode: 3
      }
    })

    return res.data
  }

  async event(id: string) {
    const res = await this.client.get<RLEvent>(`/events/${id}`)

    return res.data
  }

  async eventMatches(id: string) {
    const res = await this.client.get<{ matches: RLMatch[] }>(`/events/${id}/matches`)

    return res.data
  }

  async eventParticipants(id: string) {
    const res = await this.client.get<{ participants: RLParticipant[] }>(
      `/events/${id}/participants`
    )

    return res.data
  }

  async matches() {
    const res = await this.client.get<PaginatedResponse<{ matches: RLMatch[] }>>('/matches', {
      params: {
        after: new Date('2024-05-01').toISOString(),
        order: 'asc'
      }
    })

    return res.data
  }

  async match(id: string) {
    const res = await this.client.get<RLMatch>(`/matches/${id}`)

    return res.data
  }

  async matchGames(id: string) {
    const res = await this.client.get<{ games: RLGame[] }>(`/matches/${id}/games`)

    return res.data
  }
}

export default RLService
