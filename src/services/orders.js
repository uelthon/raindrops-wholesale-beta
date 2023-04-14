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

const createOrder = async (body) => {
  const { data } = await axios.post(`${baseUrl}/public/order/create`, body)
  return data
}

export default {
  getOrdersByUserId,
  createOrder
}
