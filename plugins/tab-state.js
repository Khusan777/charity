export default defineNuxtPlugin(() => {
  const appStore = useAppStore()
  addRouteMiddleware(
    'tab',
    (to, from) => {
      if (from.name === 'completed-id') {
        appStore.patientNews.activeTabs = true
      }
      if (from.name === 'profile-requests' && to.name === 'main-id') {
        appStore.navMyFees = true
      } else{
        appStore.navMyFees = false
      }
    },
    { global: true },
  )
})
