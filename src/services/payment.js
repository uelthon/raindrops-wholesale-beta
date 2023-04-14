import axios from 'axios'
import baseUrl from './config'

const paymentIntent = async (body) => {
  const { data } = await axios.post(`${baseUrl}/api/stripe/paymentIntent`, body)
  return data
}

export default {
  paymentIntent
}
