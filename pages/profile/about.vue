<template>
  <div class="about">
    <UiHeaderComponent
      center
      :center-text="$t('about.title')"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="about-wrapper">
      <button @click="show = true">Click 1</button>
      <!-- <div class="about-info">
        <div class="about-logo">
          <NuxtImg
            v-if="appStore.theme === 'light'"
            src="/images/logo_light.svg"
          ></NuxtImg>
          <NuxtImg v-else src="/images/logo_dark.svg"></NuxtImg>
        </div>
        <div class="about-text">
          <p>{{ $t('about.des1') }}</p>
          <p>{{ $t('about.des2') }}</p>
          <p>{{ $t('about.des3') }}</p>
          <p>{{ $t('about.des4') }}</p>
        </div>
      </div> -->
      <div class="about-stories" v-if="show">
        <Stories :stories="items" />
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '~/stores/AppStore'
import { Stories } from "vue-insta-stories";

export default {
  name: 'About',
  data() {
    return {
      appStore: useAppStore(),
      heightDevice: inject('devicePlatform'),
      items: [
        "https://picsum.photos/350/200/",
        "https://picsum.photos/400/201/",
        {
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          type: "video",
        },
      ],
      show: false
    }
  },
  components: { Stories },
}
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
