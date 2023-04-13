import axios from 'axios'
import baseUrl from './config'

const getOrdersByUserId = async (id, token) => {
  const { data } = await axios.get(`${baseUrl}/api/order/byUser/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

export default {
  getOrdersByUserId
}
