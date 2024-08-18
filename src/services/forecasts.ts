import type { AxiosInstance } from 'axios'

class ForecastsService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async getAll(eventSlug?: string) {
    const res = await this.client.get<{
      forecasts: Forecast[]
    }>('/forecasts', {
      params: {
        event: eventSlug
      }
    })

    return res.data
  }

  async createOrUpdate({
    blue,
    orange,
    matchSlug,
    eventSlug,
    date
  }: {
    blue: number
    orange: number
    matchSlug: string
    eventSlug: string
    date: string
  }) {
    const res = await this.client.post<Forecast>('/forecasts', {
      blue,
      orange,
      matchSlug,
      eventSlug,
      date
    })

    return res.data
  }

  async points(eventSlug?: string) {
    const res = await this.client.get<{ points: number }>('/forecasts/points', {
      params: {
        event: eventSlug
      }
    })

    return res.data
  }

  async getForecastResults(eventSlug?: string) {
    const res = await this.client.get<{
      forecasts: Record<string, Forecast>
    }>('/forecasts/results', {
      params: {
        event: eventSlug
      }
    })

    return res.data
  }
}

export default ForecastsService
