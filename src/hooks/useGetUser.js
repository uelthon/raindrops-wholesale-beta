import { useEffect, useState } from 'react'
import { api } from '../services/api'
import useUserStore from '../stores/userStore'

const useGetUser = ({ skip } = { skip: false }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { add, value } = useUserStore()

  const fetchData = async () => {
    const currentVersion = 4
    const email = JSON.parse(window.localStorage.getItem('email'))
    const token = JSON.parse(window.localStorage.getItem('token'))
    const version = JSON.parse(window.localStorage.getItem('version'))
    if (!email || !token || (Number(currentVersion) !== Number(version))) {
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('token')
      window.location.href = '/'
      return
    }
    try {
      const user = await api.users.getUserByEmail(email, token)
      add({
        ...user,
        token
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError('something bad happen')
    }
  }

  useEffect(() => {
    if (skip) return
    if (value !== null) return
    setLoading(true)
    fetchData()
  }, [])

  const reFetching = () => {
    fetchData()
  }

  return {
    data: value,
    loading,
    error,
    reFetching
  }
}

export default useGetUser
