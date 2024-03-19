<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    {{ getTheme }}
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
const colorMode = useColorMode()
const getTheme = computed(() => getCookie('theme'))
colorMode.preference = getTheme.value || 'light'
</script>

<style lang="scss">
@forward 'assets/styles/theme-style';

@font-face {
  font-family: 'GolosTextWebMedium';
  src:
    url('/font/golos-text_medium.woff2') format('woff2'),
    url('/font/golos-text_medium.woff') format('woff');
  font-weight: normal;
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
  font-family: GolosTextWebMedium, sans-serif !important;
  overflow: hidden;
  background: var(--primary);
}
a {
  text-decoration: none !important;
}

.chart-card {
  overflow-y: auto;
  background: #fff;
  border-radius: 12px;
  margin: 10px 20px 8px;
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
      }
      & div {
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        text-align: left;
        color: #6a6a6a;
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
      height: 91px;
      border-radius: 6px;
    }
    & .name {
      font-weight: 600;
      font-size: 14px;
      color: #363845;
      align-self: center;
      padding-bottom: 2px;
      & span {
        font-size: 12px;
        color: #2c2d35;
      }
    }
    & .city {
      font-weight: 400;
      font-size: 10px;
      color: #6a6a6a;
    }
    & .disease {
      font-weight: 400;
      font-size: 10px;
      color: #6a6a6a;
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
    border-top: 3px solid #312f2f;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
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
  transition: all 0.2s;
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
