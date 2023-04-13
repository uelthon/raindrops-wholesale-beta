import { useEffect, useState } from 'react'
import useCategoriesStore from '../stores/categoriesStore'
import { api } from '../services/api'
import useShopStore from '../stores/shopStore'

const useGetCategories = () => {
  const { add, value } = useCategoriesStore()
  const { setShopStore, value: shop } = useShopStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    if (value !== null) {
      setLoading(false)
      return
    }
    try {
      const categories = await api.products.getCategories()
      add(categories.data)
      setShopStore({
        ...shop,
        category: categories.data[0].id
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('something bad happen')
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  return {
    data: value,
    loading,
    error
  }
}

export default useGetCategories
