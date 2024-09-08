import axios from 'axios'
import UserService from './users'
// import RLService from './rl.ts.old'
import ForecastsService from './forecasts'
// import ProxyClient from './proxy'
import PandaScoreService from './ps'

const initServices = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_URL + '/api'
  })

  client.interceptors.request.use((config) => {
    const { token } = useStore()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        const router = useRouter()

        router.push('/logout')
      }

      return Promise.reject(error)
    }
  )

  // baseURL: 'https://zsr.octane.gg'
  // baseURL: 'https://api.slokh.gg'

  // const rlClient = new ProxyClient(client, 'https://api.slokh.gg')

  return {
    users: new UserService(client),
    forecasts: new ForecastsService(client),
    ps: new PandaScoreService(client)
    // rl: new RLService(rlClient as unknown as AxiosInstance)
  }
}

export default initServices
