<template>
  <div>
    <UiHeaderComponent
      center
      center-text="Сенбаев Арслан"
      left-route="/main"
    ></UiHeaderComponent>
    <div class="detail-container">
      <div class="badge-ui">
        <UiBadge
          status-text="ID 4654654"
          background-color="#f6f6f6"
          color="#6a6a6a"
        ></UiBadge>
      </div>
      <CharityPatient with-city></CharityPatient>
      <DiagnosCard :is-completed="isCompleted"></DiagnosCard>
      <HistoryInfo></HistoryInfo>
      <Report></Report>
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
