import { useI18n } from 'vue-i18n'

const getToken = () =>
  localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
const getAuthorizationHeader = () => `Bearer ${getToken()}`

const parseErrorsFromResponse = (error) => {
  const responseErrors = []
  if (error.response && error.response.data.errors) {
    const errors = error.response && error.response.data.errors
    for (const err of Object?.keys(errors)) {
      responseErrors.push(errors[err][0])
    }
  } else {
    responseErrors.push(
      error.response?.message ||
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        '[FE] Ошибка при получении данных',
    )
  }
  return responseErrors
}

const objCheckType = (obj, type) =>
  type
    ? Object.prototype.toString.call(obj) ===
      `[object ${type[0].toUpperCase()}${type.slice(1)}]`
    : false

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
  const { locale } = useI18n()
  const parsedDate = useDateFormat(date, 'DD MMM YYYY', {
    locales:
      locale.value === 'en'
        ? 'en-En'
        : locale.value === 'uz'
          ? 'uz-Uz'
          : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

const formatMonthDate = (date) => {
  const { locale } = useI18n()
  const parsedDate = useDateFormat(date, 'DD MMMM YYYY', {
    locales:
      locale.value === 'en'
        ? 'en-En'
        : locale.value === 'uz'
          ? 'uz-Uz'
          : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

const formatMonthDateTime = (date) => {
  const { locale } = useI18n()
  const parsedDate = useDateFormat(date, 'DD MMM HH:mm', {
    locales:
      locale.value === 'en'
        ? 'en-En'
        : locale.value === 'uz'
          ? 'uz-Uz'
          : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

const formatMonthNumber = (date) => {
  const { locale } = useI18n()
  const parsedDate = useDateFormat(date, 'DD.MM.YYYY', {
    locales:
      locale.value === 'en'
        ? 'en-En'
        : locale.value === 'uz'
          ? 'uz-Uz'
          : 'ru-Ru',
  })
  return parsedDate.value?.replace(/['"]+/g, '')
}

export {
  parseErrorsFromResponse,
  objCheckType,
  getCookie,
  debounce,
  getAuthorizationHeader,
  formattedDate,
  formatMonthDate,
  formatMonthDateTime,
  formatMonthNumber,
}
