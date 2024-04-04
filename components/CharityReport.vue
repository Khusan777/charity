<template>
  <div
    class="charity-reports"
    @click="$router.push(`/completed/${patientNew?.id}`)"
  >
    <div class="data">
      <NuxtImg
        class="image"
        :src="`${config.public.apiBase}/storage/${patientNew?.image}`"
        alt="user"
      ></NuxtImg>
      <div class="title">
        {{
          $i18n.locale === 'uz'
            ? patientNew?.name_uz
            : $i18n.locale === 'en'
              ? patientNew?.name_en
              : patientNew?.name_ru
        }}
      </div>
      <div
        class="description"
        v-html="
          $i18n.locale === 'uz'
            ? patientNew?.description_uz
            : $i18n.locale === 'en'
              ? patientNew?.description_en
              : patientNew?.description_ru
        "
      ></div>
      <div class="detail">{{ $t('helped.write-history') }}</div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
defineProps({
  patientNew: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.charity-reports {
  & .data {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 10px;
    background: var(--reports-card-bg);
    & .image {
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      object-fit: cover;
      height: 130px;
      width: 100%;
    }
    & .title {
      font-weight: 700;
      font-size: 12px;
      color: var(--reports-card-title);
      line-height: normal;
      padding: 15px 10px 5px;
      height: 60px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    & .description {
      font-weight: 400;
      font-size: 10px;
      color: var(--reports-card-desc);
      padding: 10px 10px 5px;
      height: 70px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    & .detail {
      padding: 12px 10px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-style: italic;
      font-weight: 500;
      font-size: 10px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: #0073ff;
    }
  }
}
</style>
