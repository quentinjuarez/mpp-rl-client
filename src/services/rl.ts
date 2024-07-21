import type { AxiosInstance } from 'axios'

const tempRegions = ['NA', 'EU', 'INT']

class RLService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async events() {
    const res = await this.client.get<PaginatedResponse<{ events: RLEvent[] }>>('/events', {
      params: {
        after: new Date().toISOString(),
        sort: 'startDate:asc',
        mode: 3,
        region: tempRegions
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

  async results(day: string) {
    const after = new Date(day)
    after.setHours(0, 0, 0, 0)

    const before = new Date(day)
    before.setHours(23, 59, 59, 999)

    const now = new Date()
    if (before > now) {
      before.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds())
    }

    const res = await this.client.get<PaginatedResponse<{ matches: RLMatch[] }>>('/matches', {
      params: {
        after: after.toISOString(),
        before: before.toISOString(),
        sort: 'date:asc',
        mode: 3,
        region: tempRegions
      }
    })

    return res.data
  }

  async matches() {
    const res = await this.client.get<PaginatedResponse<{ matches: RLMatch[] }>>('/matches', {
      params: {
        after: new Date().toISOString(),
        sort: 'date:asc',
        mode: 3,
        region: tempRegions
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
    const res = await this.client.get<PaginatedResponse<{ events: RLEvent[] }>>('/search', {
      params: {
        relavant: true,
        type: 'event'
      }
    })

    return res.data
  }
}

export default RLService
