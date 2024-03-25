import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const loading = ref(false)
  const user = ref(null)
  const webSession = ref(null)
  const info = ref(null)
  const lang = ref(null)

  const setWebSession = (session) => {
    webSession.value = session
  }
  const setLang = (language) => {
    lang.value = language
  }

  return {
    loading,
    user,
    setWebSession,
    webSession,
    info,
    setLang,
    lang,
  }
})
