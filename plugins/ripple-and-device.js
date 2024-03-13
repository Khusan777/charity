import Ripple from 'vue3-whr-ripple-directive/src/ripple'

export default defineNuxtPlugin((nuxtApp) => {
  const { isIos, isSafari, isMacOS, isApple } = useDevice()
  const deviceIsIOS = computed(() => {
    return isIos || isSafari || isMacOS || isApple ? '100dvh' : '100vh'
  })
  nuxtApp.vueApp.provide('devicePlatform', deviceIsIOS.value)
  nuxtApp.vueApp.directive('ripple', Ripple)
})
