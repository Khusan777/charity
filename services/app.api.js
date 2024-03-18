import { apiClient } from '~/services/apiClient'
const getMe = (params) => apiClient.post('/login', params)

const getFee = (params) => apiClient.get('/fee', { params })

const refreshAuthToken = () => apiClient.post(`/refresh`)

export { getMe, getFee, refreshAuthToken }
