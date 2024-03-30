<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
const appStore = useAppStore()
onMounted(() => {
  const themeCookie = computed(() =>
    getCookie('theme') ? getCookie('theme') : getCookie('click-theme'),
  )
  const themeData = computed(() => getCookie('theme'))
  const theme = getCookie('theme')
  // Check what the system color scheme preferences are
  try {
    // See references for more context for why "not all" is used here
    const rootElem = document.documentElement
    if (themeCookie.value === 'light' || themeData.value === 'light') {
      rootElem.setAttribute('data-theme', 'light')
      appStore.setTheme(themeCookie.value || themeData.value)
    }
    if (theme === 'light') {
      rootElem.setAttribute('data-theme', 'light')
      appStore.setTheme(themeCookie.value || themeData.value)
    }
    // catches browser/OS level preference changes while the page is already loaded
  } catch (err) {}
})

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)
if (!appStore.webSession) {
  appStore.setWebSession(cookieWebSession.value)
}
</script>

<!--<script>-->
<!--import { useColorMode } from '@vueuse/core'-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      colorState: useColorMode(),-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    cookie() {-->
<!--      return getCookie('web-session')-->
<!--    },-->
<!--    theme() {-->
<!--      return getCookie('theme')-->
<!--    },-->
<!--  },-->
<!--  created() {-->
<!--    if (this.theme && this.theme == 'light') {-->
<!--      this.colorState.preference = 'light'-->
<!--      this.$colorMode.preference = 'light'-->
<!--    } else {-->
<!--      this.$colorMode.preference = 'dark'-->
<!--    }-->
<!--    const lang = getCookie('lang')-->
<!--    if (lang && lang == 'uz') {-->
<!--      this.$i18n.locale = 'uz'-->
<!--    }-->
<!--    if (lang && lang == 'en') {-->
<!--      this.$i18n.locale = 'en'-->
<!--    }-->
<!--    const currentTheme = getCookie('theme')-->
<!--    if (currentTheme && currentTheme == 'light') {-->
<!--      this.$colorMode.preference = 'light'-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<style lang="scss">
@forward 'assets/styles/theme-style';

@font-face {
  font-family: 'GolosText';
  src:
    url('/font/golos-text_medium.woff2') format('woff2'),
    url('/font/golos-text_medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'GolosText';
  src:
    url('/font/golos-text_regular.woff2') format('woff2'),
    url('/font/golos-text_regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'GolosText';
  src:
    url('/font/golos-text_demibold.woff2') format('woff2'),
    url('/font/golos-text_demibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'GolosText';
  src:
    url('/font/golos-text_bold.woff2') format('woff2'),
    url('/font/golos-text_bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

* {
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
html,
body,
#__nuxt {
  font-family: GolosText, sans-serif !important;
  overflow: hidden;
  background: var(--bg-color);
  font-weight: 400;
}
a {
  text-decoration: none !important;
}

.chart-card {
  overflow-y: auto;
  background: var(--chart-card-bg);
  border-radius: 12px;
  margin: 0 20px 10px;
  padding: 10px 10px 0 10px;
  & .fond-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    & .data {
      display: flex;
      align-items: center;
      gap: 4px;
      & .fond-img {
        width: 24px;
        height: 24px;
        background-size: cover;
        border-radius: 50%;
      }
      & div {
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        text-align: left;
        color: var(--fond-color);
      }
    }
    & .refferal {
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }
  & .user-disease {
    display: flex;
    gap: 10px;
    width: 100%;
    padding-bottom: 8px;
    & .image-user {
      width: 91px;
      height: auto;
      border-radius: 6px;
    }
    & .name {
      padding-top: 2px;
      display: flex;
      gap: 4px;
      align-items: center;
      line-height: normal;
      justify-content: space-between;
      font-weight: 600;
      font-size: 14px;
      color: var(--user-name);
      padding-bottom: 2px;
      & span {
        font-size: 12px;
        color: var(--user-age);
      }
    }
    & .city {
      font-weight: 400;
      font-size: 10px;
      color: var(--city-name);
    }
    & .disease {
      font-weight: 400;
      font-size: 10px;
      color: var(--disease-name);
    }
  }
}

.loader-wrapper {
  width: 100%;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  & .loader-anim {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 10px;
    border-top: 3px solid var(--loader-color);
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

.text-message {
  text-align: center;
  padding-top: 25px;
  font-weight: 400;
  font-size: 12px;
  color: var(--disease-name);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.swiper-pagination-bullet {
  opacity: 1 !important;
  background: var(
    --swiper-pagination-bullet-inactive-color,
    #ffffff
  ) !important;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #007aff !important;
}

.page-enter-active,
.page-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.page-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.page-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.page-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}

.v-toast__item {
  min-height: 2em !important;
}
.v-toast__item--success {
  min-height: 2em !important;
}
.v-toast__item .v-toast__text {
  padding: 0.8em !important;
}

.offcanvas-bottom {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}
</style>
