import { useToast } from 'vue-toast-notification'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { objCheckType, parseErrorsFromResponse } from '~/utils'
import { useAppStore } from '~/stores/AppStore'
import { useAllServices } from '~/composables/app.api'

export default defineNuxtPlugin((nuxtApp) => {
  const { getMe, refreshAuthToken, setToken } = useAllServices()
  const cookieWebSession = computed(() =>
    getCookie('click-web-session')
      ? getCookie('click-web-session')
      : getCookie('web-session'),
  )
  const config = useRuntimeConfig()
  const $toast = useToast()
  const router = useRouter()
  const appStore = useAppStore()
  const { user, webSession } = storeToRefs(appStore)

  const apiClient = axios.create({
    baseURL: `${config.public.apiBase}/api`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      mode: 'no-cors',
    },
  })
  nuxtApp.vueApp.provide('apiClient', apiClient)

  const unAuthenticate = async () => {
    window?.localStorage?.removeItem('auth')
    delete apiClient.defaults.headers.Authorization
    await router.push('/')
  }

  const errorStatus = {
    401: async (error) => {
      if (error?.response?.data?.message === 'Token has expired') {
        return refreshToken(error)
      }
      if (error?.response?.data?.message === 'Token not provided') {
        return autoActivateUser(error)
      } else {
        await unAuthenticate()
      }
    },
    419: function () {
      router?.back() || router.push('/')
    },
  }

  let requestPromise = null
  const refreshToken = async (error) => {
    const request = error.config
    let response = null
    try {
      if (requestPromise) {
        response = await requestPromise
      } else {
        requestPromise = refreshAuthToken()
        response = await requestPromise
      }
      if (response) {
        const token = 'Bearer' + ' ' + response.data?.token
        if (apiClient?.defaults?.headers?.common) {
          apiClient.defaults.headers.common.Authorization = token
        } else throw new Error('Ошибка во время установки токена')
        window?.localStorage?.setItem('auth', JSON.stringify(token))
        return apiClient(request)
      }
    } catch (e) {
      window?.localStorage?.setItem('auth', null)
      await router.push('/error')
      delete apiClient.defaults.headers.common.Authorization
    } finally {
      requestPromise = null
    }
    return null
  }

  const autoActivateUser = async (error) => {
    const request = error.config
    let response = null
    try {
      if (requestPromise) {
        response = await requestPromise
      } else {
        requestPromise = getMe({
          web_session: webSession.value
            ? webSession.value
            : cookieWebSession.value,
          activate: 1,
        })
        response = await requestPromise
      }
      if (response) {
        if (response.data?.user) {
          user.value = response.data?.user
          setToken(response.data?.token)
        }
        return apiClient(request)
      }
    } catch (error) {
      $toast.error(parseErrorsFromResponse(error))
      await router.push('/error')
    } finally {
      requestPromise = null
    }
    return null
  }

  const authInterceptor = (config) => {
    const authToken = window?.localStorage?.getItem('auth')
    if (authToken) {
      config.headers.Authorization = getAuthorizationHeader()
    }
    return config
  }

  const generateToaster = (errors) => {
    if (errors && objCheckType(errors, 'string')) {
      $toast.error(errors)
    } else if (errors && errors.length) {
      errors.forEach((error) => {
        $toast.error(error)
      })
    }
  }
  const errorInterceptor = async (error) => {
    const errors = parseErrorsFromResponse(error)
    if (error?.response?.status in errorStatus) {
      const responseWithRefreshedToken =
        await errorStatus[error.response.status](error)
      if (responseWithRefreshedToken) {
        return Promise.resolve(responseWithRefreshedToken)
      }
      errorStatus[error.response.status]()
    }
    if (error.response?.data?.error?.code !== 1001) {
      generateToaster(errors)
    }
    return Promise.reject(error)
  }
  const responseInterceptor = (response) => response
  apiClient.interceptors.response.use(responseInterceptor, errorInterceptor)
  apiClient.interceptors.request.use(authInterceptor)
})
