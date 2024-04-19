import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const scrollPositionNews = ref(0)
  const scrollPositionCompleted = ref(0)
  const resetScrollPosition = ref(false)
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
  const completedFee = reactive({
    loading: false,
    index: null,
    newsLoader: false,
    paginationData: null,
  })
  const queryFee = reactive({
    page: 1,
    newsPage: 1,
  })
  const pushNews = reactive({
    loading: false,
    index: null,
    paginationData: null,
  })
  const fromCompletedPage = ref(false)
  const fromMainPage = ref(false)
  const myFees = ref(null)
  const navMyFees = ref(null)

  const saveScrollPositionNews = (position) => {
    scrollPositionNews.value = position
  }
  const saveScrollPositionCompleted = (position) => {
    scrollPositionCompleted.value = position
  }

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
    pushNews,
    setTheme,
    theme,
    fromMainPage,
    myFees,
    navMyFees,
    fromCompletedPage,
    saveScrollPositionNews,
    scrollPositionNews,
    scrollPositionCompleted,
    saveScrollPositionCompleted,
    completedFee,
    queryFee,
    resetScrollPosition,
  }
})
