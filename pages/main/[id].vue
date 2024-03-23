<template>
  <div>
    <UiHeaderComponent
      center
      center-text="Личная карточка"
      left-route="/main"
    ></UiHeaderComponent>
    <div class="detail-container">
      <div v-if="isCompleted === 'false'" class="badge-ui">
        <UiBadge
          with-image
          img-ref="/images/badge/urgentHelp.svg"
          status-text="Нужна срочная помощь"
          back-color="var(--badge-back-color)"
          colour="var(--badge-color)"
        ></UiBadge>
      </div>
      <div v-else class="badge-ui">
        <UiBadge
          status-text="ID 4654654"
          back-color="var(--badge-back-color)"
          colour="var(--badge-color)"
        ></UiBadge>
      </div>
      <CharityPatient with-city></CharityPatient>
      <DiagnosCard :is-completed="isCompleted"></DiagnosCard>
      <HistoryInfo></HistoryInfo>
      <ReportTransactions></ReportTransactions>
      <div v-if="isCompleted === 'false'" class="btn-help">
        <UiButton :with-disabled="false"></UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
const route = useRoute()
const isCompleted = computed(() => route.query.completed)
</script>

<style lang="scss" scoped>
.detail-container {
  max-height: calc(v-bind(heightDevice) - 75px);
  height: calc(v-bind(heightDevice) - 75px);
  padding-bottom: 8px;
  overflow-y: scroll;
  & .badge-ui {
    padding: 0 20px;
  }
  & .btn-help {
    margin: 20px;
  }
}
</style>
