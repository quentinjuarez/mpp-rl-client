import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class ProxyClient {
  private axiosClient: AxiosInstance
  private baseURL: string

  constructor(axiosClient: AxiosInstance, baseURL: string) {
    this.baseURL = baseURL
    this.axiosClient = axiosClient
  }

  /**
   * Get request wrapper
   * @param eventUrl - The event URL to proxy
   * @param params - Additional params to be sent
   * @param config - Axios request config
   * @returns Promise of Axios response
   */
  public async get<T = any>(
    eventUrl: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>('/proxy', {
      ...config,
      params: {
        url: `${this.baseURL}${eventUrl}`,
        ...params
      }
    })
  }

  /**
   * Post request wrapper
   * @param eventUrl - The event URL to proxy
   * @param data - The body data to send
   * @param config - Axios request config
   * @returns Promise of Axios response
   */
  public async post<T = any>(
    eventUrl: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient.post<T>('/proxy', data, {
      ...config,
      params: {
        url: `https://api.slokh.gg${eventUrl}`,
        ...config?.params
      }
    })
  }
}

export default ProxyClient
