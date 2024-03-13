import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dev-promo23.click.uz/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'no-cors',
  },
})

export { apiClient }
