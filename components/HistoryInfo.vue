<template>
  <div class="history">
    <div class="title">{{ $t('patient-detail.history') }}</div>
    <div
      class="description"
      v-html="
        $i18n.locale === 'en'
          ? historyPatient?.description_en
          : $i18n.locale === 'uz'
            ? historyPatient?.description_uz
            : historyPatient?.description_ru
      "
    ></div>
  </div>
</template>

<script setup>
defineProps({
  historyPatient: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.history {
  margin: 0 20px 20px;
  border-radius: 12px;
  padding: 16px 10px;
  background: var(--history-bg-card);
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: var(--history-text-color);
  & .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 133%;
  }
  & .title {
    font-weight: 600;
    font-size: 16px;
    color: var(--history-card-title);
    padding-bottom: 8px;
  }
}
</style>
