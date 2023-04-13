import { useEffect, useState } from 'react'
import { api } from '../services/api'

const useGetProduct = ({ slug, skip = false }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const product = await api.products.getProductBySlug(slug)
      setData(product.data[0])
      console.log(product.data[0].id)
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
  }, [slug])

  return {
    data,
    loading,
    error
  }
}

export default useGetProduct
