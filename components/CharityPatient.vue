<template>
  <div class="name">
    {{ patient?.surname }} {{ patient?.name }}
    <span
      >({{ patient?.age === 0 ? 1 : patient?.age }}
      {{
        patient?.age > 1 && patient?.age <= 4
          ? $t('year', 1)
          : patient?.age === 0 || patient?.age === 1
            ? $t('year', 0)
            : $t('year', 2)
      }})</span
    >
  </div>
  <div v-if="withCity" class="city">
    {{
      $i18n.locale === 'en'
        ? patient?.region?.name_en
        : $i18n.locale === 'uz'
          ? patient?.region?.name_uz
          : patient?.region?.name_ru
    }}
  </div>
  <div class="charity-swiper">
    <NuxtImg
      :src="`${config.public.apiBase}/storage/${patient?.photo}`"
      class="help-images"
      alt="patient_photo"
    ></NuxtImg>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
defineProps({
  withCity: {
    type: Boolean,
  },
  patient: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.name {
  padding: 4px 20px 0;
  font-weight: 500;
  font-size: 18px;
  color: var(--patient-name);
  & span {
    color: var(--patient-name-span);
  }
}
.city {
  padding: 0 20px 13px;
  font-weight: 400;
  font-size: 10px;
  color: var(--patient-city);
}
.charity-swiper {
  padding: 0 20px;
  & .help-images {
    margin-bottom: 20px;
    background-size: cover;
    border-radius: 16px;
    height: auto;
    width: 100%;
  }
}
</style>
