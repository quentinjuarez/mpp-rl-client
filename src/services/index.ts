import axios from 'axios'
import UserService from './users'

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

  return {
    users: new UserService(client)
  }
}

export default initServices
