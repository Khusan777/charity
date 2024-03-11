import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const loading = ref(false)
  const user = ref(null)
  return {
    loading,
    user,
  }
})
