export default defineNuxtPlugin(() => {
  const appStore = useAppStore()
  addRouteMiddleware(
    'tab',
    (_, from) => {
      if (from.name === 'completed-id') {
        appStore.patientNews.activeTabs = true
      } else {
        appStore.patientNews.activeTabs = false
      }
    },
    { global: true },
  )
})
