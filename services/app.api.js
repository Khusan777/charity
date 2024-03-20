import { apiClient } from '~/services/apiClient'
const getMe = (params) => apiClient.post('/login', params)

const getFee = (params) => apiClient.get('/fee', { params })

const getCompletedFee = (params) => apiClient.get('/fee', { params })

const refreshAuthToken = () => apiClient.post(`/refreshToken`)

export { getMe, getFee, refreshAuthToken, getCompletedFee }
