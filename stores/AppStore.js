import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const loading = ref(false)
  const user = ref(null)
  const webSession = ref(null)
  const info = ref(null)
  const lang = ref(null)
  const theme = ref(null)
  const patientNews = reactive({
    loading: false,
    index: null,
    paginationData: null,
    activeTabs: false,
  })

  const setWebSession = (session) => {
    webSession.value = session
  }
  const setLang = (language) => {
    lang.value = language
  }

  const setTheme = (themeValue) => {
    theme.value = themeValue
  }

  return {
    loading,
    user,
    setWebSession,
    webSession,
    info,
    setLang,
    lang,
    patientNews,
    setTheme,
    theme,
  }
})
