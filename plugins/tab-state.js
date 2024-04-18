export default defineNuxtPlugin(() => {
  const appStore = useAppStore()
  addRouteMiddleware(
    'tab',
    (to, from) => {
      if (from.name === 'completed-id') {
        appStore.patientNews.activeTabs = true
      }
      if (from.name === 'main') {
        appStore.fromMainPage = true
      }
      if (
        (from.name === 'main' ||
          from.name === 'notification' ||
          from.name === 'profile') &&
        to.name === 'completed'
      ) {
        appStore.resetScrollPosition = true
      }
      if (from.name === 'profile-requests' && to.name === 'main-id') {
        appStore.navMyFees = true
      } else {
        appStore.navMyFees = false
      }
    },
    { global: true },
  )
})
