let isProd = null
export default defineNuxtPlugin((nuxtApp) => {
  if (process.env) {
    isProd = process?.env?.NODE_ENV === 'production'
  }
  const requestOptions = {
    method: 'GET',
  }
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    if (error && isProd) {
      const data = `<pre><code class="language-javascript">Vue Warn: ${error}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    } else if (instance && isProd) {
      const data = `<pre><code class="language-javascript">Vue Instance: ${instance}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
      console.log('here')
    } else if (isProd && info) {
      const data = `<pre><code class="language-javascript">Vue Info: ${info}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    }
  }
  nuxtApp.vueApp.config.warnHandler = (error, instance, info) => {
    if (error && isProd) {
      const data = `<pre><code class="language-javascript">Vue Warn: ${error}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    } else if (instance && isProd) {
      const data = `<pre><code class="language-javascript">Vue Instance: ${instance}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    } else if (info && isProd) {
      const data = `<pre><code class="language-javascript">Vue Info: ${info}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    }
  }
  nuxtApp.hook('vue:error', (error, instance, info) => {
    if (error && isProd) {
      const data = `<pre><code class="language-javascript">Nuxt Warn: ${error}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    } else if (instance && isProd) {
      const data = `<pre><code class="language-javascript">Nuxt Instance: ${instance}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    } else if (instance && isProd) {
      const data = `<pre><code class="language-javascript">Nuxt Info: ${info}</code></pre>`
      fetch(
        `https://api.telegram.org/bot6410254952:AAGi6kN9EyJD6KkHLLBXQ4snVAoP077uztM/sendMessage?chat_id=-4139852497&parse_mode=html&text=${data}`,
        requestOptions,
      )
    }
  })
})
