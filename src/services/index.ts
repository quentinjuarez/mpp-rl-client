import axios from 'axios'
import UserService from './users'
import RLService from './rl'
import ForecastsService from './forecasts'

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

  const rlClient = axios.create({
    baseURL: 'https://zsr.octane.gg'
  })

  return {
    users: new UserService(client),
    forecasts: new ForecastsService(client),
    rl: new RLService(rlClient)
  }
}

export default initServices
