import Ripple from 'vue3-whr-ripple-directive/src/ripple'

export default defineNuxtPlugin((nuxtApp) => {
  const device = useDevice()
  const deviceIsIOS = computed(() => {
    return device.isIos || device.isSafari || device.isMacOS || device.isApple
      ? '100dvh'
      : '100vh'
  })
  nuxtApp.vueApp.provide('devicePlatform', deviceIsIOS.value)
  nuxtApp.vueApp.directive('ripple', Ripple)
})
