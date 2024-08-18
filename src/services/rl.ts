import type { AxiosInstance } from 'axios'

// const tempRegions = ['NA', 'EU', 'INT']

class RLService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async events() {
    const res = await this.client.get<PaginatedResponse<RLEvent>>('/events', {
      params: {
        sort: 'start_date',
        order: 'desc',
        mode: 3,
        region: 'INT',
        tier: 'S',
        perPage: 50
      }
    })

    return res.data
  }

  async event(slug: string) {
    const res = await this.client.get<RLEvent>(`/events/${slug}`)

    return res.data
  }

  async eventMatches(slug: string) {
    const res = await this.client.get<{ matches: RLMatch[] }>(`/matches`, {
      params: {
        event: slug
      }
    })

    return res.data
  }

  async eventParticipants(id: string) {
    const res = await this.client.get<{ participants: RLParticipant[] }>(
      `/events/${id}/participants`
    )

    return res.data
  }

  async results(eventSlug: string) {
    const res = await this.client.get<PaginatedResponse<RLMatch>>('/matches', {
      params: {
        after: new Date().toISOString(),
        sort: 'date',
        mode: 3,
        perPage: 50,
        event: eventSlug
      }
    })

    return res.data
  }

  async matches(eventSlug: string) {
    const res = await this.client.get<PaginatedResponse<RLMatch>>('/matches', {
      params: {
        before: new Date().toISOString(),
        sort: 'date',
        mode: 3,
        perPage: 50,
        event: eventSlug
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

  async team(id: string) {
    const res = await this.client.get<RLTeam>(`/teams/${id}`)

    return res.data
  }

  async teamPlayers(id: string) {
    const res = await this.client.get<{ players: RLPlayer[] }>(`/players`, {
      params: {
        team: id
      }
    })

    return res.data
  }

  async search() {
    const res = await this.client.get<PaginatedResponse<RLEvent>>('/search', {
      params: {
        relavant: true,
        type: 'event'
      }
    })

    return res.data
  }
}

export default RLService
