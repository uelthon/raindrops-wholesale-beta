import { useEffect, useState } from 'react'
import { api } from '../services/api'

const useGetProductsByCategory = ({ id, skip = false }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const products = await api.products.getProductsByCategory(id)
      setData(products.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('something bad happen')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (skip) return
    setLoading(true)
    fetchData()
  }, [id])

  return {
    data,
    loading,
    error
  }
}

export default useGetProductsByCategory
