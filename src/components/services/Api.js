import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers.token = `${token}`
  }

  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    window.location = '#/account/login'
  }

  return Promise.reject(error)
})

export default instance
