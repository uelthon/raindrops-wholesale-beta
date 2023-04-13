import axios from 'axios'
import baseUrl from './config'

const getUserByEmail = async (email, token) => {
  const { data } = await axios.get(`${baseUrl}/api/users/byEmail/${email}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

const updateUser = async (id, body, token) => {
  const { data } = await axios.put(`${baseUrl}/api/users/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

const changePassword = async (id, newPass, token) => {
  const { data } = await axios.put(`${baseUrl}/api/user/${id}/updatePassword?password=${newPass}`, {

  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

export default {
  getUserByEmail,
  updateUser,
  changePassword
}
