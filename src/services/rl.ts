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

  async eventMatches(eventSlug: string) {
    const res = await this.client.get<PaginatedResponse<RLMatch>>(`/matches`, {
      params: {
        event: eventSlug
      }
    })

    return res.data
  }

  async results(eventSlug: string) {
    const res = await this.client.get<PaginatedResponse<RLMatch>>('/matches', {
      params: {
        after: new Date().toISOString(),
        sort: 'date',
        mode: 3,
        perPage: 100,
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
        perPage: 100,
        event: eventSlug
      }
    })

    return res.data
  }

  async match(slug: string) {
    const res = await this.client.get<RLMatch>(`/matches/${slug}`)

    return res.data
  }

  async team(slug: string) {
    const res = await this.client.get<RLTeam>(`/teams/${slug}`)

    return res.data
  }

  async teamPlayers(slug: string) {
    const res = await this.client.get<PaginatedResponse<RLPlayer>>(`/players`, {
      params: {
        team: slug
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
