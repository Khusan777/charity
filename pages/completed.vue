<template>
  <div class="completed-pages">
    <UiHeaderComponent center center-text="Завершенные"></UiHeaderComponent>
    <div class="content-data">
      <div class="container">
        <ul id="myTab" class="nav nav-tabs complete-tabs" role="tablist">
          <li class="nav-item">
            <button
              id="complete-tab"
              class="nav-link nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#complete-tab-pane"
              type="button"
              role="tab"
              aria-controls="complete-tab-pane"
              aria-selected="true"
            >
              Завершённые
            </button>
          </li>
          <li class="nav-item">
            <button
              id="report-tab"
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#report-tab-pane"
              type="button"
              role="tab"
              aria-controls="report-tab-pane"
              aria-selected="false"
            >
              Отчёты
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" class="tab-content">
        <div
          id="complete-tab-pane"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="complete-tab"
          tabindex="0"
        >
          <ChartCardCollected></ChartCardCollected>
          <ChartCardCollected></ChartCardCollected>
          <ChartCardCollected></ChartCardCollected>
          <ChartCardCollected></ChartCardCollected>
        </div>
        <div
          id="report-tab-pane"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="report-tab"
          tabindex="0"
        >
          <CharityReport></CharityReport>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CharityReport from '~/components/CharityReport.vue'

const heightDevice = inject('devicePlatform')

definePageMeta({
  layout: 'single',
})
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
        padding: 0 8px;
        margin-bottom: 20px;

        .nav-item {
          width: 50%;
          flex-wrap: nowrap;

          .nav-link {
            background: #fff;
            box-shadow: -10px 10px 25px 0px rgba(255, 255, 255, 0.1) inset;
            backdrop-filter: blur(15px);
            width: 100%;
            height: 35px;
            border-radius: 0;
            font-weight: 400;
            font-size: 12px;
            color: #363845;
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
  width: 95%;
  height: 35px;
  position: fixed;
  z-index: 9;
  padding: 0 20px;
}
[class*='tab-content'] {
  margin-top: 55px;
}
</style>
