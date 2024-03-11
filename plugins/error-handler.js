export default defineNuxtPlugin((nuxtApp) => {
  const requestOptions = {
    method: 'GET',
  }
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    const data = `<pre><code class="language-javascript">Nuxt Error: ${error} | Nuxt Instance: ${instance} | Nuxt Info: ${info}</code></pre>`
    fetch(
      `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
      requestOptions,
    )
  }
  nuxtApp.hook('vue:error', (error, instance, info) => {
    const data = `<pre><code class="language-javascript">Vue Error: ${error} | Vue Instance: ${instance} | Vue Info: ${info}</code></pre>`
    fetch(
      `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
      requestOptions,
    )
  })
})
