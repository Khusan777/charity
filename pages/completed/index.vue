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
        <template v-if="!appStore.patientNews.activeTabs">
          <div
            id="complete-tab-pane"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="complete-tab"
            tabindex="0"
          >
            <template v-if="completedFee.loading">
              <div class="completed-data-container">
                <CompletedSkeleton></CompletedSkeleton>
                <CompletedSkeleton></CompletedSkeleton>
                <CompletedSkeleton></CompletedSkeleton>
                <CompletedSkeleton></CompletedSkeleton>
              </div>
            </template>
            <template
              v-if="
                completedFee.index?.length && !appStore.patientNews.activeTabs
              "
            >
              <div ref="el" class="completed-data-container">
                <div v-for="feeItem in completedFee.index" :key="feeItem.id">
                  <ChartCardCollected
                    v-if="
                      feeItem?.status?.id === 4 || feeItem?.status?.id === 5
                    "
                    :key="feeItem.id"
                    :fee-item="feeItem"
                  ></ChartCardCollected>
                </div>
              </div>
              <div v-if="completedFee.loader" class="loader-wrapper">
                <span class="loader-anim"></span>
              </div>
            </template>
            <template
              v-if="
                !appStore.patientNews.activeTabs &&
                !completedFee.index?.length &&
                !completedFee.loading
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
        </template>
        <template v-if="appStore.patientNews.activeTabs">
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
            style="padding: 0 20px 0; display: flex; flex-wrap: wrap; gap: 10px"
            class="report-data-container"
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
              <div v-if="completedFee.newsLoader" class="loader-wrapper">
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
        </template>
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
const queryFee = reactive({
  page: 1,
  newsPage: 1,
})
const heightDevice = inject('devicePlatform')
const completedFee = reactive({
  loading: false,
  index: null,
  newsLoader: false,
  paginationData: null,
})
const el = shallowRef(null)
const newsEl = shallowRef(null)

const getFeeCompletedIndex = () => {
  completedFee.loading = true
  getCompletedFee({ page: queryFee.page, status_ids: [4, 5] })
    .then((response) => {
      completedFee.index = response.data?.data
      completedFee.paginationData = response.data?.pagination
      completedFee.loading = false
    })
    .catch(() => {
      completedFee.loading = false
    })
}
getFeeCompletedIndex()

const getNews = () => {
  if (!appStore.patientNews.index?.length) {
    appStore.patientNews.loading = true
    getPatientNews({
      type: 1,
      page: queryFee.newsPage,
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
  completedFee.loader = true
  await getCompletedFee({ page: queryFee.page, status_ids: [4, 5] })
    .then((response) => {
      completedFee.index = [...completedFee.index, ...response.data?.data]
      completedFee.paginationData = response.data?.pagination
      completedFee.loader = false
    })
    .catch(() => {
      completedFee.loader = false
    })
}

useInfiniteScroll(
  el,
  async () => {
    if (
      completedFee.paginationData.currentPage <
      completedFee.paginationData.totalPages
    ) {
      queryFee.page += 1
      await getFeePagination()
    }
  },
  { distance: 10 },
)

const getNewsPagination = async () => {
  completedFee.newsLoader = true
  if (queryFee.newsPage <= appStore.patientNews.paginationData?.totalPages) {
    await getPatientNews({
      type: 1,
      page: queryFee.newsPage,
    })
      .then((response) => {
        appStore.patientNews.index = [
          ...appStore.patientNews.index,
          ...response.data?.data,
        ]
        appStore.patientNews.paginationData = response.data?.pagination
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
      appStore.patientNews.paginationData?.currentPage <
      appStore.patientNews.paginationData?.totalPages
    ) {
      console.log('here')
      queryFee.newsPage += 1
      await getNewsPagination()
    }
  },
  { distance: 10 },
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
  margin-top: 55px;
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
