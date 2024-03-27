<template>
  <div class="info-pages">
    <ui-header-component
      left-route="/completed"
      center
      center-text="История"
    ></ui-header-component>
    <div class="history-container">
      <NuxtImg
        style="width: 100%"
        class="user-image"
        :src="`https://dev-promo23.click.uz/storage/${patientNew?.image}`"
        alt="user"
      ></NuxtImg>
      <div class="info-panel">
        <div class="date">
          {{ formatMonthDate(patientNew?.publication_date) }}
        </div>
        <div class="name">
          {{
            $i18n.locale === 'uz'
              ? patientNew?.name_uz
              : $i18n.locale === 'en'
                ? patientNew?.name_en
                : patientNew?.name_ru
          }}
        </div>
        <div class="info1">
          <div
            v-html="
              $i18n.locale === 'uz'
                ? patientNew?.description_uz
                : $i18n.locale === 'en'
                  ? patientNew?.description_en
                  : patientNew?.description_ru
            "
          ></div>
        </div>
      </div>
      <div class="photo-gallery">
        <div class="title">Фотогалерея</div>
        <div style="display: flex; gap: 10px; width: 100%" class="galleries">
          <div style="width: 65%" class="left">
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
          </div>
          <div
            style="width: 35%; display: flex; flex-direction: column; gap: 10px"
          >
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
const route = useRoute()
const appStore = useAppStore()
const patientNew = computed(() =>
  appStore.patientNews.index?.find((item) => item.id === +route.params.id),
)
</script>

<style lang="scss" scoped>
.info-pages {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  width: 100%;
  overflow: hidden;
  & .history-container {
    max-height: calc(v-bind(heightDevice) - 75px);
    height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
    overflow-y: scroll;
    & .user-image {
      border-radius: 12px 12px 0 0;
    }
    & .info-panel {
      border-radius: 0 0 12px 12px;
      padding: 20px 10px;
      background: var(--history-bg-card);
      & .date {
        font-weight: 500;
        font-size: 10px;
        color: var(--history-text-color);
        padding-bottom: 4px;
      }
      & .name {
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 18px;
        color: var(--history-card-title);
      }
      & .info1 {
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: var(--history-text-color);
      }
    }
    & .photo-gallery {
      margin: 30px 0 20px;
      border-radius: 12px;
      padding: 10px 10px 20px 10px;
      background: var(--history-bg-card);
      & .title {
        padding-bottom: 8px;
        font-weight: 600;
        font-size: 16px;
        color: var(--history-card-title);
      }
    }
  }
}
</style>
