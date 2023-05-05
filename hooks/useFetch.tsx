import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useState, useEffect } from "react"

type FetchProps = {
  url: string
  options: AxiosRequestConfig
}

const useFetch = ({ url, options }: FetchProps) => {
  const [data, setData] = useState<AxiosResponse<any, any>>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(url, options)
      setData(response)
    } catch (error) {
      const err = error as AxiosError
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url, options])

  return { data, error, loading }
}

export default useFetch
