<template>
  <div
    class="charity-reports"
    @click="$router.push(`/completed/${patientNew?.id}`)"
  >
    <div class="data">
      <NuxtImg
        class="image"
        :src="`https://dev-promo23.click.uz/storage/${patientNew?.image}`"
        alt="user"
      ></NuxtImg>
      <div style="height: 105px">
        <div class="title">
          {{
            $i18n.locale === 'uz'
              ? patientNew?.name_uz
              : $i18n.locale === 'en'
                ? patientNew?.name_en
                : patientNew?.name_ru
          }}
        </div>
        <div class="description">
          <div
            v-html="
              $i18n.locale === 'uz'
                ? patientNew?.description_uz
                : $i18n.locale === 'en'
                  ? patientNew?.description_en
                  : patientNew?.description_ru
            "
          ></div>
        </div>
      </div>
      <div class="detail">Читать историю</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  patientNew: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.charity-reports {
  width: 50%;
  padding: 0 10px 10px 0;
  & .data {
    width: 100%;
    border-radius: 12px;
    height: 265px;
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
      padding: 10px 10px 5px;
      max-height: 55px;
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
      padding: 5px 10px 5px;
      & div {
        max-height: 45px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    & .detail {
      padding: 5px 10px 10px;
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
