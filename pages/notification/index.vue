<template>
  <div class="notification">
    <UiHeaderComponent
      center
      :center-text="$t('push.title')"
    ></UiHeaderComponent>
    <div
      v-if="appStore.pushNews.index?.length"
      ref="newsEl"
      class="notification-list"
    >
      <template v-if="appStore.pushNews.loading">
        <PushSkeleton></PushSkeleton>
        <PushSkeleton></PushSkeleton>
        <PushSkeleton></PushSkeleton>
      </template>
      <template v-if="appStore.pushNews.index">
        <router-link
          v-for="patientData in appStore.pushNews.index"
          :key="patientData?.id"
          :to="'/notification/' + patientData?.id"
          class="notification-item"
        >
          <div class="notification-icon">
            <NuxtImg
              :src="`${config.public.apiBase}/storage/${patientData?.image}`"
              class="notification-icon__img"
            ></NuxtImg>
          </div>
          <div class="notification-text">
            <div class="notification-box">
              <div class="notification-title">
                {{
                  $i18n.locale === 'en'
                    ? patientData?.name_en
                    : $i18n.locale === 'uz'
                      ? patientData?.name_uz
                      : patientData?.name_ru
                }}
              </div>
              <div class="notification-more">
                <NuxtImg
                  src="/images/arrow.svg"
                  class="notification-more__img"
                ></NuxtImg>
              </div>
            </div>
            <div class="notification-date">
              {{ formatMonthDateTime(patientData?.created_at) }}
            </div>
          </div>
        </router-link>
        <div v-if="completedFee.newsLoader" class="loader-wrapper">
          <span class="loader-anim"></span>
        </div>
      </template>
    </div>
    <div v-else class="notification-none">
      <NuxtImg
        v-if="appStore.theme === 'light'"
        src="/images/push-not-light.png"
      ></NuxtImg>
      <NuxtImg v-else src="/images/push-not.png"></NuxtImg>
      <p>{{ $t('push.des') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '~/stores/AppStore'
import PushSkeleton from '~/components/skeleton/PushSkeleton.vue'
const config = useRuntimeConfig()
const { getPatientNews } = useAllServices()
definePageMeta({
  layout: 'single',
})
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const queryFee = reactive({
  page: 1,
  newsPage: 1,
})
const completedFee = reactive({
  loading: false,
  index: null,
  newsLoader: false,
  paginationData: null,
})
const newsEl = shallowRef(null)
const getNews = () => {
  if (!appStore.pushNews.index?.length) {
    appStore.pushNews.loading = true
    getPatientNews({
      type: 0,
      page: queryFee.newsPage,
    })
      .then((response) => {
        appStore.pushNews.index = response.data?.data
        appStore.pushNews.paginationData = response.data?.pagination
        appStore.pushNews.loading = false
      })
      .catch(() => {
        appStore.pushNews.loading = false
      })
  }
}
getNews()
const getNewsPagination = async () => {
  completedFee.newsLoader = true
  if (queryFee.newsPage <= appStore.pushNews.paginationData?.totalPages) {
    await getPatientNews({
      type: 0,
      page: queryFee.newsPage,
    })
      .then((response) => {
        appStore.pushNews.index = [
          ...appStore.pushNews.index,
          ...response.data?.data,
        ]
        appStore.pushNews.paginationData = response.data?.pagination
        completedFee.newsLoader = false
      })
      .catch(() => {
        completedFee.newsLoader = false
      })
  }
}
useInfiniteScroll(
  newsEl,
  async () => {
    if (
      appStore.pushNews.paginationData?.currentPage <
      appStore.pushNews.paginationData?.totalPages
    ) {
      console.log('here')
      queryFee.newsPage += 1
      await getNewsPagination()
    }
  },
  { distance: 10 },
)
</script>

<style scoped lang="scss">
.notification {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  padding-bottom: 75px;
  &-list {
    height: calc(100% - 75px);
    max-height: calc(100% - 75px);
    width: 100%;
    padding: 0 20px 20px;
    overflow-y: scroll;
  }
  &-item {
    background: var(--bg3);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 10px;
    color: var(--text);
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-icon {
    padding: 0 3px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 6px;
    }
  }
  &-date {
    color: var(--text2);
    font-size: 10px;
  }
  &-text {
    word-break: break-word;
  }
  &-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    gap: 10px;
    width: 100%;
  }
  &-title {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
  }
  &-more {
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 12px;
    }
  }
  &-des {
    font-size: 12px;
    color: var(--text2);
    line-height: 14px;
  }
  &-none {
    height: calc(100% - 75px);
    max-height: calc(100% - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    img {
      width: 80%;
    }
    p {
      margin-bottom: 0;
      color: var(--text2);
      text-align: center;
      font-size: 14px;
      line-height: 16.8px;
    }
  }
}
</style>
