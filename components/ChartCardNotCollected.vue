<template>
  <div
    class="chart-card"
    @click="
      $router.push({
        path: `/main/${feeItem?.id}`,
        query: { completed: false },
      })
    "
  >
    <div class="fond-container">
      <div class="data">
        <NuxtImg
          class="fond-img"
          :src="`https://dev-promo23.click.uz/storage/${feeItem?.fond?.icon}`"
          alt="fond"
        ></NuxtImg>
        <div>
          {{
            $i18n.locale === 'en'
              ? feeItem?.fond?.name_en
              : $i18n.locale === 'uz'
                ? feeItem?.fond?.name_uz
                : feeItem?.fond?.name_ru
          }}
        </div>
      </div>
    </div>
    <div class="user-disease">
      <NuxtImg
        class="image-user"
        :src="`https://dev-promo23.click.uz/storage/${feeItem?.main_photo?.name}`"
        alt="user"
      ></NuxtImg>
      <div>
        <UiBadge
          with-image
          :img-ref="feeItem?.type_need?.icon"
          :status-text="
            $i18n.locale === 'uz'
              ? feeItem?.type_need?.name_uz
              : $i18n.locale === 'en'
                ? feeItem?.type_need?.name_en
                : feeItem?.type_need?.name_ru
          "
          back-color="rgb(255, 243, 224)"
          colour="rgb(251, 140, 0)"
        ></UiBadge>
        <div class="name">
          {{ feeItem?.patient_name + ' ' + feeItem?.patient_surname || '' }}
          <span>({{ feeItem?.patient_age }} года)</span>
        </div>
        <div class="city">
          {{
            $i18n.locale === 'uz'
              ? feeItem?.region?.name_uz
              : $i18n.locale === 'en'
                ? feeItem?.region?.name_en
                : feeItem?.region?.name_ru
          }}
        </div>
        <UiBorderLine></UiBorderLine>
        <div class="disease">
          {{
            $i18n.locale === 'uz'
              ? feeItem?.sick_category?.name_uz
              : $i18n.locale === 'en'
                ? feeItem?.sick_category?.name_en
                : feeItem?.sick_category?.name_ru
          }}
        </div>
      </div>
    </div>
    <UiCollectionProgress
      :amount="amountData"
      is-completed="false"
    ></UiCollectionProgress>
    <div v-ripple.500="'rgba(255, 255, 255, 0.35)'" class="help-btn">
      <UiButton
        :with-disabled="false"
        @click="
          $router.push({
            path: `/main/${feeItem?.id}`,
          })
        "
      ></UiButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feeItem: {
    type: Object,
    required: true,
  },
})
const amountData = reactive({
  leftAmount: props.feeItem?.left_amount,
  amount: props.feeItem?.amount,
})
</script>

<style lang="scss" scoped>
.help-btn {
  padding-bottom: 10px;
}
</style>
