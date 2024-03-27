<template>
  <div class="completed-pages">
    <UiHeaderComponent center center-text="Завершенные"></UiHeaderComponent>
    <div
      v-if="completedFee.loading || appStore.patientNews.loading"
      class="content-data"
    >
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
              Завершённые
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
              @click="getNews"
            >
              Вы помогли
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" class="tab-content">
        <div
          id="complete-tab-pane"
          :class="
            appStore.patientNews.activeTabs
              ? 'tab-pane fade'
              : 'tab-pane fade show active'
          "
          role="tabpanel"
          aria-labelledby="complete-tab"
          tabindex="0"
        >
          <template v-if="completedFee.loading">
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
            <CompletedSkeleton></CompletedSkeleton>
          </template>
        </div>
        <div
          id="report-tab-pane"
          :class="
            appStore.patientNews.activeTabs
              ? 'tab-pane fade show active'
              : 'tab-pane fade'
          "
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
        >
          <template v-if="appStore.patientNews.loading">
            <ReportSkeleton></ReportSkeleton>
          </template>
        </div>
      </div>
    </div>
    <div v-else ref="el" class="content-data">
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
              Завершённые
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
              @click="getNews"
            >
              Вы помогли
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" class="tab-content">
        <div
          id="complete-tab-pane"
          :class="
            appStore.patientNews.activeTabs
              ? 'tab-pane fade'
              : 'tab-pane fade show active'
          "
          role="tabpanel"
          aria-labelledby="complete-tab"
          tabindex="0"
        >
          <div v-for="feeItem in completedFee.index" :key="feeItem.id">
            <ChartCardCollected
              :key="feeItem.id"
              :fee-item="feeItem"
            ></ChartCardCollected>
          </div>
          <div v-if="completedFee.loader" class="loader-wrapper">
            <span class="loader-anim"></span>
          </div>
        </div>
        <div
          id="report-tab-pane"
          :class="
            appStore.patientNews.activeTabs
              ? 'tab-pane fade show active'
              : 'tab-pane fade'
          "
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
          style="
            padding: 0 20px;
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            overflow-x: hidden;
          "
        >
          <template
            v-for="patientData in appStore.patientNews.index"
            :key="patientData?.id"
          >
            <CharityReport :patient-new="patientData"></CharityReport>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CharityReport from '~/components/CharityReport.vue'
import { getCompletedFee, getPatientNews } from '~/services/app.api'
import CompletedSkeleton from '~/components/skeleton/CompletedSkeleton.vue'
import { useAppStore } from '~/stores/AppStore'
import ReportSkeleton from '~/components/skeleton/ReportSkeleton.vue'

definePageMeta({
  layout: 'single',
})
const appStore = useAppStore()
const queryFee = reactive({
  page: 1,
})
const heightDevice = inject('devicePlatform')
const completedFee = reactive({
  loading: false,
  index: null,
  paginationData: null,
})
const el = shallowRef(null)
const getFeeCompletedIndex = () => {
  completedFee.loading = true
  getCompletedFee({ ...queryFee, status_ids: [4, 5, 7] })
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
  appStore.patientNews.activeTabs = true
  appStore.patientNews.loading = true
  getPatientNews()
    .then((response) => {
      appStore.patientNews.index = response.data?.data
      appStore.patientNews.paginationData = response.data?.pagination
      appStore.patientNews.loading = false
    })
    .catch(() => {
      appStore.patientNews.loading = false
    })
}

const getFeePagination = () => {
  completedFee.loader = true
  getCompletedFee({ ...queryFee, status_ids: [4, 5, 7] })
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
        completedFee.paginationData.totalPages &&
      queryFee.page < completedFee.paginationData.totalPages
    ) {
      queryFee.page += 1
      await getFeePagination()
    }
  },
  { distance: 100 },
)
</script>

<style lang="scss" scoped>
.completed-pages {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  & .content-data {
    max-height: calc(v-bind(heightDevice) - 150px);
    height: calc(v-bind(heightDevice) - 150px);
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
[class*='nav-tabs'] {
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9;
  height: 50px;
  background: var(--bg-color);
}
[class*='tab-content'] {
  margin-top: 55px;
}
</style>
