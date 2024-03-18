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
          :src="`${config.public.apiBase}/storage/${feeItem?.fond?.icon}`"
          alt="fond"
        ></NuxtImg>
        <div v-if="$i18n.locale === 'en'">{{ feeItem?.fond?.name_en }}</div>
        <div v-if="$i18n.locale === 'uz'">{{ feeItem?.fond?.name_uz }}</div>
        <div v-else>{{ feeItem?.fond?.name_ru }}</div>
      </div>
    </div>
    <div class="user-disease">
      <NuxtImg class="image-user" src="/images/user.png" alt="user"></NuxtImg>
      <div>
        <UiBadge
          with-image
          img-ref="/images/badge/urgentHelp.svg"
          status-text="Нужна срочная помощь"
          back-color="rgb(255, 243, 224)"
          colour="rgb(251, 140, 0)"
        ></UiBadge>
        <div class="name">
          {{
            feeItem?.patient_name + feeItem?.patient_surname || 'Сенбаев Арслан'
          }}
          <span>(4 года)</span>
        </div>
        <div class="city">
          {{ feeItem?.region_name || 'Фергана' }}
        </div>
        <UiBorderLine></UiBorderLine>
        <div v-if="$i18n.locale === 'en'" class="disease">
          {{ feeItem?.sick_category?.name_en }}
        </div>
        <div v-if="$i18n.locale === 'uz'" class="disease">
          {{ feeItem?.sick_category?.name_uz }}
        </div>
        <div v-else class="disease">
          {{ feeItem?.sick_category?.name_ru }}
        </div>
      </div>
    </div>
    <UiCollectionProgress
      :amount="amount"
      is-completed="false"
    ></UiCollectionProgress>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  feeItem: {
    type: Object,
    required: true,
  },
})
const amount = toRef({
  amount: props.feeItem?.amount,
  leftAmount: props.feeItem?.left_amount,
})
</script>
