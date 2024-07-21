import type { AxiosInstance } from 'axios'

class ForecastsService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async getAll() {
    const res = await this.client.get<{
      forecasts: Forecast[]
    }>('/forecasts')

    return res.data
  }

  async createOrUpdate({
    blue,
    orange,
    matchId,
    eventId
  }: {
    blue: number
    orange: number
    matchId: string
    eventId: string
  }) {
    const res = await this.client.post<Forecast>('/forecasts', {
      blue,
      orange,
      matchId,
      eventId
    })

    return res.data
  }

  async points() {
    const res = await this.client.get<{ points: number }>('/forecasts/points')

    return res.data
  }
}

export default ForecastsService
