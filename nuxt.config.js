export default defineNuxtConfig({
  components: true,
  server: {
    mockServiceWorker: false,
  },
  build: {
    transpile: ['vue-toastification'],
  },
  // routeRules: {
  //   '/': { prerender: true },
  //   '/billion': { prerender: true },
  //   '/error': { prerender: true },
  //   cors: true,
  //   '/game': { ssr: false },
  //   '/result/*': { isg: true },
  //   '/profile': { swr: 3600 },
  //   '/swr': { swr: true },
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in', appear: true },
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
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
    'mixpanel-nuxt',
    '@nuxt/image',
  ],
  mixpanel: {
    token: 'f4fa3ffddf7c416ea8c428221abda738',
    disabled: true,
    config: {
      debug: false,
      persistence: 'localStorage',
    },
  },
  css: [{ src: '~/assets/css/bootstrap.min.css', lang: 'css' }],
})
