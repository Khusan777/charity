<template>
  <div class="offer">
    <UiHeaderComponent
      center
      :center-text="
        $i18n.locale === 'uz'
          ? appStore.info?.[0]?.name_uz
          : $i18n.locale === 'en'
            ? appStore.info?.[0]?.name_en
            : appStore.info?.[0]?.name_ru
      "
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="offer-wrapper">
      <div
        class="offer-text"
        v-html="
          $i18n.locale === 'uz'
            ? appStore.info?.[0]?.description_uz
            : $i18n.locale === 'en'
              ? appStore.info?.[0]?.description_en
              : appStore.info?.[0]?.description_ru
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
import { getInfo } from '~/services/app.api'
import { useAppStore } from '~/stores/AppStore'

const appStore = useAppStore()
const heightDevice = inject('devicePlatform')

const getInfoText = async () => {
  await getInfo()
    .then((response) => {
      if (response.status === 200) {
        appStore.info = response.data.data
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
if (!appStore.info) {
  getInfoText()
}
</script>

<style scoped lang="scss">
.offer {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px 20px;
    overflow-y: scroll;
    font-size: 14px;
  }
  &-text {
    color: var(--text5);
  }
}
</style>
