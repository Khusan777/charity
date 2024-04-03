import axios from 'axios'

// https://charity.click.uz/api - for prod
// https://dev-promo23.click.uz/api - for dev

const apiClient = axios.create({
  baseURL: 'https://charity.click.uz/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export { apiClient }
