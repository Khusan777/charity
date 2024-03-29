import { apiClient } from '~/services/apiClient'
const getMe = (params) => apiClient.post('/login', params)

const getFee = (params) => apiClient.get('/fee', { params })

const getInfo = () => apiClient.get('/info')

const refreshAuthToken = () => apiClient.post(`/refresh`)

const getCompletedFee = (params) => apiClient.get('/fee', { params })

const getDetailPatient = (patientId) => apiClient.get(`/fee/${patientId}`)

const getPatientNews = () => apiClient.get(`/news`)

const getMyFee = () => apiClient.get(`/myFees`)

export {
  getMe,
  getFee,
  refreshAuthToken,
  getInfo,
  getCompletedFee,
  getDetailPatient,
  getPatientNews,
  getMyFee,
}
