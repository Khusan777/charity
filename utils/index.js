import { useI18n } from 'vue-i18n'
import { apiClient } from '~/services/apiClient'

const getToken = () =>
  localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
const getAuthorizationHeader = () => `Bearer ${getToken()}`

const parseErrorsFromResponse = (error) => {
  const responseErrors = []
  if (error.response && error.response.data.errors) {
    const errors =
      error.response && error.response.data.errors && error.response.data.error
    for (const err of Object.keys(errors)) {
      responseErrors.push(errors[err][0])
    }
  } else {
    responseErrors.push(
      error.response?.data?.error || '[FE] Ошибка при получении данных',
    )
  }
  return responseErrors
}

const objCheckType = (obj, type) =>
  type
    ? Object.prototype.toString.call(obj) ===
      `[object ${type[0].toUpperCase()}${type.slice(1)}]`
    : false

const setToken = function (token) {
  if (apiClient?.defaults?.headers?.common) {
    apiClient.defaults.headers.common.Authorization = token
  } else throw new Error('Ошибка во время установки токена')
  window?.localStorage?.setItem('auth', JSON.stringify(token))
}

const debounce = (func, wait) => {
  let timeout
  return function () {
    const fnCall = () => {
      func.apply(this, arguments)
    }
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, wait)
  }
}

const getCookie = function (name) {
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (window?.document?.cookie) {
    if ((arr = document.cookie.match(reg))) {
      return arr[2]
    }
  } else {
    return null
  }
}

const formattedDate = (date) => {
  const $i18n = useI18n()
  const parsedDate = useDateFormat(date, 'DD MMM. YYYY', {
    locales:
      $i18n.locale.value === 'en'
        ? // eslint-disable-next-line no-constant-condition
          'en-En'
          ? $i18n.locale.value === 'uz'
          : 'uz-Uz'
        : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

const formatMonthDate = (date) => {
  const $i18n = useI18n()
  const parsedDate = useDateFormat(date, 'DD MMMM YYYY', {
    locales:
      $i18n.locale.value === 'en'
        ? // eslint-disable-next-line no-constant-condition
          'en-En'
          ? $i18n.locale.value === 'uz'
          : 'uz-Uz'
        : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

export {
  parseErrorsFromResponse,
  objCheckType,
  getCookie,
  setToken,
  debounce,
  getAuthorizationHeader,
  formattedDate,
  formatMonthDate,
}
