<template>
  <div class="chart-card" @click="goToDetailPage(feeItem?.id)">
    <div class="fond-container">
      <div class="data">
        <NuxtImg
          class="fond-img"
          :src="`${config.public.apiBase}/storage/${feeItem?.fond?.icon}`"
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
        :src="`${config.public.apiBase}/storage/${feeItem?.patient_photo}`"
        alt="user"
      ></NuxtImg>
      <div style="width: calc(100% - 100px)">
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
          <div>
            {{ feeItem?.patient_surname + ' ' + feeItem?.patient_name || '' }}
            <span
              >({{ feeItem?.patient_age === 0 ? 1 : feeItem?.patient_age }}
              {{
                feeItem?.patient_age > 1 && feeItem?.patient_age <= 4
                  ? $t('year', 1)
                  : feeItem?.patient_age === 0 || feeItem?.patient_age === 1
                    ? $t('year', 0)
                    : $t('year', 2)
              }})</span
            >
          </div>
          <div
            @click.stop="
              $router.push({
                path: `/main/${feeItem?.id}`,
                query: { completed: true },
              })
            "
          >
            <NuxtImg
              width="16"
              height="16"
              src="/images/right-icon.svg"
              alt="right-icon"
            ></NuxtImg>
          </div>
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
import { useAppStore } from '~/stores/AppStore'

const config = useRuntimeConfig()
const router = useRouter()
const appStore = useAppStore()
const props = defineProps({
  feeItem: {
    type: Object,
    required: true,
  },
})
const amountData = reactive({
  amount: props.feeItem?.collected || 0,
})

const goToDetailPage = (feeId) => {
  appStore.fromMainPage = false
  router.push({ path: `/main/${feeId}`, query: { completed: true } })
}
</script>
