import { useEffect, useState } from 'react'
import { api } from '../services/api'

const useGetOrdersByUserId = ({ id, token, skip }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const orders = await api.orders.getOrdersByUserId(id, token)
      setData(orders.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('error')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (skip) return
    setLoading(true)
    fetchData()
  }, [id, token])

  return {
    data,
    loading,
    error
  }
}

export default useGetOrdersByUserId
