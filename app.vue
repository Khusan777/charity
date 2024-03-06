<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const devicePlatform = inject('devicePlatform')
</script>

<style lang="scss">
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
  max-height: v-bind(devicePlatform);
  height: v-bind(devicePlatform);
  font-family: GolosTextWebMedium, sans-serif !important;
  overflow: hidden;
  background: rgb(226, 228, 240);
}
a {
  text-decoration: none !important;
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
</style>
