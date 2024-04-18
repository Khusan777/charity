<template>
  <div>
    <UiHeaderComponent
      center
      :center-text="$t('push.title')"
      left-route="/notification"
    ></UiHeaderComponent>
    <div class="notification-detail">
      <div class="notification-detail-wrapper">
        <NuxtImg
          :src="`${config.public.apiBase}/storage/${pushNew?.image}`"
          class="notification-detail-img"
        ></NuxtImg>
        <div class="notification-detail-date">{{ formattedDate(pushNew?.created_at) }}</div>
        <div class="notification-detail-title">{{ $i18n.locale === 'en' ? pushNew?.name_en : $i18n.locale === 'uz' ? pushNew?.name_uz : pushNew?.name_ru }}</div>
        <div class="notification-detail-des"
          v-html="
            $i18n.locale === 'uz'
              ? pushNew?.description_uz
              : $i18n.locale === 'en'
                ? pushNew?.description_en
                : pushNew?.description_ru
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
const config = useRuntimeConfig()
const route = useRoute()
const appStore = useAppStore()
const pushNew = computed(() =>
  appStore.pushNews.index?.find((item) => item.id === +route.params.id),
)
</script>

<style lang="scss" scoped>
.notification-detail {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    padding: 0 20px 20px;
    overflow-y: scroll;
    height: calc(v-bind(heightDevice) - 74px);
  }
  &-date {
    color: var(--text2);
    font-size: 10px;
    margin-bottom: 5px;
  }
  &-title {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--text);
  }
  &-des {
    p {
      font-size: 12px;
      color: var(--text2);
      line-height: 14px;
      margin-bottom: 10px;
    }
  }
  &-img{
    margin-bottom: 20px;
    width: 100%;
    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>
