export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log('Nuxt Error', error)
    console.log('Nuxt Instance', instance)
    console.log('Nuxt Info ', info)
  }
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.log('Vue Error', error)
    console.log('Vue Instance', instance)
    console.log('Vue Info ', info)
  })
})
