import { useState } from 'react'
import { api } from '../services/api'

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const mutate = async ({ id, body, token }, { onSuccess, onError }) => {
    setLoading(true)
    try {
      const data = await api.users.updateUser(id, body, token)
      setLoading(false)
      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error) {
      console.log(error)
      setError('error')
      setLoading(false)
      if (onError) {
        onError(error)
      }
    }
  }

  return {
    error,
    loading,
    mutate
  }
}

export default useUpdateUser
