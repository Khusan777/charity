export default defineNuxtPlugin(() => {
  const appStore = useAppStore()
  addRouteMiddleware(
    'tab',
    (_, from) => {
      if (from.name === 'completed-id') {
        appStore.patientNews.activeTabs = true
      }
    },
    { global: true },
  )
})
