import { useState } from 'react'
import { api } from '../services/api'

const useChangePassword = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const mutate = async ({ id, newPass, token }, { onSuccess, onError }) => {
    setLoading(true)
    try {
      const data = await api.users.changePassword(id, newPass, token)
      setLoading(false)
      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error) {
      setError('error')
      setLoading(false)
      if (onError) {
        onError(error)
      }
    }
  }

  return {
    loading,
    error,
    mutate
  }
}

export default useChangePassword
