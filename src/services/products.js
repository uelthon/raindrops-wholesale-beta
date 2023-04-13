import axios from 'axios'
import baseUrl from './config'

const getCategories = async () => {
  const { data } = await axios.get(`${baseUrl}/public/catalogByReference/CATEGORY`)
  return data
}

const getProductsByCategory = async (id) => {
  const { data } = await axios.get(`${baseUrl}/public/productsByCategory/${id}`)
  return data
}

const getProductBySlug = async (slug) => {
  const { data } = await axios.get(`${baseUrl}/public/productBySlug/?slug=${slug}`)
  return data
}

export default {
  getCategories,
  getProductsByCategory,
  getProductBySlug
}
