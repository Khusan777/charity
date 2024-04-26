<template>
  <div class="completed-pages">
    <UiHeaderComponent
      center
      :center-text="$t('completed.tab-name')"
    ></UiHeaderComponent>
    <div class="content-data">
      <div class="container">
        <ul id="myTab" class="nav nav-tabs complete-tabs" role="tablist">
          <li class="nav-item">
            <button
              id="complete-tab"
              :class="
                appStore.patientNews.activeTabs ? 'nav-link' : 'nav-link active'
              "
              data-bs-toggle="tab"
              data-bs-target="#complete-tab-pane"
              type="button"
              role="tab"
              aria-controls="complete-tab-pane"
              aria-selected="true"
              @click="appStore.patientNews.activeTabs = false"
            >
              {{ $t('completed.pag-name') }}
            </button>
          </li>
          <li class="nav-item">
            <button
              id="report-tab"
              :class="
                appStore.patientNews.activeTabs ? 'nav-link active' : 'nav-link'
              "
              data-bs-toggle="tab"
              data-bs-target="#report-tab-pane"
              type="button"
              role="tab"
              aria-controls="report-tab-pane"
              aria-selected="false"
              @click="appStore.patientNews.activeTabs = true"
            >
              {{ $t('helped.tab-name') }}
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" class="tab-content">
        <div
          id="complete-tab-pane"
          ref="el"
          class="completed-data-container"
          :class="
            !appStore.patientNews.activeTabs
              ? 'tab-pane fade show active'
              : 'tab-pane fade'
          "
          role="tabpanel"
          aria-labelledby="complete-tab"
          tabindex="0"
          @scroll="saveScrollCompleted"
        >
          <template v-if="appStore.completedFee.loading">
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
          </template>
          <template
            v-if="
              appStore.completedFee.index?.length &&
              !appStore.patientNews.activeTabs
            "
          >
            <div
              v-for="feeItem in appStore.completedFee.index"
              :key="feeItem.id"
            >
              <ChartCardCollected
                v-if="feeItem?.status?.id === 4 || feeItem?.status?.id === 5"
                :key="feeItem.id"
                :fee-item="feeItem"
              ></ChartCardCollected>
            </div>
            <div v-if="appStore.completedFee.loader" class="loader-wrapper">
              <span class="loader-anim"></span>
            </div>
          </template>
          <template
            v-if="
              !appStore.patientNews.activeTabs &&
              !appStore.completedFee.index?.length &&
              !appStore.completedFee.loading
            "
          >
            <div
              class="text-without-content"
              style="
                padding: 0 20px;
                width: 100%;
                display: flex;
                overflow: hidden;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <div class="text-message">
                {{ $t('completed.without-content') }}
              </div>
            </div>
          </template>
        </div>
        <div
          id="report-tab-pane"
          ref="newsEl"
          :class="
            appStore.patientNews.activeTabs
              ? 'tab-pane fade show active'
              : 'tab-pane fade'
          "
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
          style="
            padding: 0 20px 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            height: auto;
          "
          class="report-data-container"
          @scroll="saveScrollNews"
        >
          <template v-if="appStore.patientNews.loading">
            <ReportSkeleton></ReportSkeleton>
          </template>
          <template
            v-if="
              appStore.patientNews.index?.length &&
              appStore.patientNews.activeTabs
            "
          >
            <div
              v-for="patientData in appStore.patientNews.index"
              :key="patientData?.id"
              style="width: 48%"
            >
              <CharityReport :patient-new="patientData"></CharityReport>
            </div>
            <div v-if="appStore.completedFee.newsLoader" class="loader-wrapper">
              <span class="loader-anim"></span>
            </div>
          </template>
          <template
            v-if="
              appStore.patientNews.activeTabs &&
              !appStore.patientNews.index?.length &&
              !appStore.patientNews.loading
            "
          >
            <div
              class="text-without-content"
              style="
                padding: 0 20px;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                justify-content: center;
                align-items: center;
              "
            >
              <div class="text-message">
                {{ $t('helped.without-content') }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CharityReport from '~/components/CharityReport.vue'
import CompletedSkeleton from '~/components/skeleton/CompletedSkeleton.vue'
import { useAppStore } from '~/stores/AppStore'
import ReportSkeleton from '~/components/skeleton/ReportSkeleton.vue'
import { useAllServices } from '~/composables/app.api'

definePageMeta({
  layout: 'single',
})
const { getCompletedFee, getPatientNews } = useAllServices()
const appStore = useAppStore()
appStore.fromCompletedPage = true
const heightDevice = inject('devicePlatform')
const el = shallowRef(null)
const newsEl = shallowRef(null)

onMounted(() => {
  if (appStore.resetScrollPosition) {
    newsEl.value.scrollTop = 0
    el.value.scrollTop = 0
  } else {
    newsEl.value.scrollTop = appStore.scrollPositionNews
    el.value.scrollTop = appStore.scrollPositionCompleted
  }
})

onBeforeUnmount(() => {
  newsEl.value.removeEventListener('scroll', saveScrollNews)
  el.value.removeEventListener('scroll', saveScrollCompleted)
})

const saveScrollNews = () => {
  appStore.resetScrollPosition = false
  if (newsEl.value.scrollTop !== 0) {
    appStore.saveScrollPositionNews(newsEl.value.scrollTop)
  }
}

const saveScrollCompleted = () => {
  appStore.resetScrollPosition = false
  if (el.value.scrollTop !== 0) {
    appStore.saveScrollPositionCompleted(el.value.scrollTop)
  }
}

const getFeeCompletedIndex = () => {
  if (!appStore.completedFee.index?.length) {
    appStore.completedFee.loading = true
    getCompletedFee({ page: appStore.queryFee.page, status_ids: [4, 5] })
      .then((response) => {
        appStore.completedFee.index = response.data?.data
        appStore.completedFee.paginationData = response.data?.pagination
        appStore.completedFee.loading = false
      })
      .catch(() => {
        appStore.completedFee.loading = false
      })
  }
}
getFeeCompletedIndex()

const getNews = () => {
  if (!appStore.patientNews.index?.length) {
    appStore.patientNews.loading = true
    getPatientNews({
      type: 1,
      page: appStore.queryFee.newsPage,
    })
      .then((response) => {
        appStore.patientNews.index = response.data?.data
        appStore.patientNews.paginationData = response.data?.pagination
        appStore.patientNews.loading = false
      })
      .catch(() => {
        appStore.patientNews.loading = false
      })
  }
}
getNews()

const getFeePagination = async () => {
  appStore.completedFee.loader = true
  await getCompletedFee({ page: appStore.queryFee.page, status_ids: [4, 5] })
    .then((response) => {
      appStore.completedFee.index = [
        ...appStore.completedFee.index,
        ...response.data?.data,
      ]
      appStore.completedFee.paginationData = response.data?.pagination
      appStore.completedFee.loader = false
    })
    .catch(() => {
      appStore.completedFee.loader = false
    })
}

useInfiniteScroll(
  el,
  async () => {
    if (
      appStore.completedFee.paginationData?.currentPage <
      appStore.completedFee.paginationData?.totalPages
    ) {
      appStore.queryFee.page += 1
      await getFeePagination()
    }
  },
  { distance: 100 },
)

const getNewsPagination = async () => {
  appStore.completedFee.newsLoader = true
  if (
    appStore.queryFee.newsPage <=
    appStore.patientNews.paginationData?.totalPages
  ) {
    await getPatientNews({
      type: 1,
      page: appStore.queryFee.newsPage,
    })
      .then((response) => {
        appStore.patientNews.index = [
          ...appStore.patientNews.index,
          ...response.data?.data,
        ]
        appStore.patientNews.paginationData = response.data?.pagination
        appStore.completedFee.newsLoader = false
      })
      .catch(() => {
        appStore.completedFee.newsLoader = false
      })
  }
}

useInfiniteScroll(
  newsEl,
  async () => {
    if (
      appStore.patientNews.paginationData?.currentPage <
      appStore.patientNews.paginationData?.totalPages
    ) {
      appStore.queryFee.newsPage += 1
      await getNewsPagination()
    }
  },
  { distance: 100 },
)

watch(
  () => appStore.patientNews.activeTabs,
  (value) => {
    if (value && !appStore.resetScrollPosition) {
      newsEl.value.scrollTop = appStore.scrollPositionNews
    }
  },
  { flush: 'post' },
)

watch(
  () => appStore.patientNews.activeTabs,
  (value) => {
    if (!value && !appStore.resetScrollPosition) {
      el.value.scrollTop = appStore.scrollPositionCompleted
    }
  },
  { flush: 'post' },
)
</script>

<style lang="scss" scoped>
.completed-pages {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  & .content-data {
    overflow-y: auto;
    & .complete {
      &-tabs {
        display: flex;
        border: 0;
        margin-bottom: 20px;
        padding: 0 20px;

        .nav-item {
          width: 50%;
          flex-wrap: nowrap;

          .nav-link {
            background: var(--actual-nav-tabs);
            box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
            backdrop-filter: blur(15px);
            width: 100%;
            height: 35px;
            border-radius: 0;
            font-weight: 400;
            font-size: 12px;
            color: var(--tabs-color);
            border: 0;

            &.active {
              color: #ffffff;
              background: #0073ff;
            }
          }

          &:first-child {
            .nav-link {
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            }
          }

          &:last-child {
            .nav-link {
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
          }
        }
      }
    }
  }
}
.text-without-content {
  overflow: hidden;
  max-height: calc(v-bind(heightDevice) - 205px);
  height: calc(v-bind(heightDevice) - 205px);
}
[class*='nav-tabs'] {
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9;
  height: 50px;
  background: var(--bg-color);
}

.completed-data-container {
  margin-top: 50px;
  max-height: calc(v-bind(heightDevice) - 200px);
  height: calc(v-bind(heightDevice) - 200px);
  overflow-y: auto;
}

.report-data-container {
  margin-top: 55px;
  max-height: calc(v-bind(heightDevice) - 200px);
  height: calc(v-bind(heightDevice) - 200px);
  overflow-y: auto;
}
</style>
