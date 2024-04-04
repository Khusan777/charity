<template>
  <div class="about">
    <UiHeaderComponent
      center
      :center-text="$t('about.title')"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="about-wrapper">
      <div class="about-info">
        <div class="about-logo">
          <NuxtImg
            v-if="appStore.theme === 'light'"
            src="/images/logo_light.svg"
          ></NuxtImg>
          <NuxtImg v-else src="/images/logo_dark.svg"></NuxtImg>
        </div>
        <div class="about-text" v-html="$t('about.des')"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore()
const heightDevice = inject('devicePlatform')
</script>

<style lang="scss">
.about {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    overflow-y: scroll;
  }
  &-logo {
    margin-bottom: 20px;
    img {
      height: 50px;
      max-width: 100%;
    }
  }
  p {
    margin-bottom: 20px;
    line-height: 16px;
    font-size: 12px;
    color: var(--text5);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
