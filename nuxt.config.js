export default defineNuxtConfig({
  components: true,
  server: {
    mockServiceWorker: false,
  },
  image: {
    provider: 'ipx',
    ipx: {
      maxAge: 31536000,
    },
  },
  build: {
    extractCSS: true,
    transpile: ['vue-toastification'],
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  routeRules: {
    '/main': { swr: true },
    '/': { swr: true },
    '/completed': { swr: true },
    // '/completed/*': { prerender: true },
    '/profile/about': { swr: true },
    '/profile/faq': { swr: true },
    '/notification': { swr: true },
    '/profile/': { swr: true },
    cors: true,
    // '/game': { ssr: false },
    // '/result/*': { isg: true },
    // '/profile': { swr: 3600 },
    // '/swr': { swr: true },
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,user-scalable=no',
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2',
          crossorigin: 'anonymous',
          defer: true,
        },
      ],
      meta: [
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,user-scalable=no',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@vueuse/nuxt',
    '@nuxtjs/device',
    // 'mixpanel-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    // '@nuxtjs/color-mode',
  ],
  // mixpanel: {
  //   token: 'f4fa3ffddf7c416ea8c428221abda738',
  //   disabled: true,
  //   config: {
  //     debug: false,
  //     persistence: 'localStorage',
  //   },
  // },
  // colorMode: {
  //   fallback: 'light',
  // },
  css: [{ src: '~/assets/css/bootstrap.min.css', lang: 'css' }],
})
