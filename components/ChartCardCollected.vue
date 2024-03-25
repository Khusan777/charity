<template>
  <div
    class="chart-card"
    @click="
      $router.push({ path: `/main/${feeItem?.id}`, query: { completed: true } })
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
        :src="`https://dev-promo23.click.uz/storage/${feeItem?.patient_photo}`"
        alt="user"
      ></NuxtImg>
      <div>
        <UiBadge
          with-image
          :img-ref="feeItem?.status?.icon"
          :status-text="
            $i18n.locale === 'uz'
              ? feeItem?.status?.name_uz
              : $i18n.locale === 'en'
                ? feeItem?.status?.name_en
                : feeItem?.status?.name_ru
          "
          back-color="#F1F8E9"
          colour="#66ca28"
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
    <UiCompletedProgress :amount="amountData.amount"></UiCompletedProgress>
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
  amount: props.feeItem?.amount,
})
</script>
