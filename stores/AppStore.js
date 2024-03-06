import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('AppStore', () => {
  const loading = ref(false)

  return {
    loading,
  }
})
