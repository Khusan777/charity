<template>
  <div class="chart-card">
    <p style="color: #0a53be; word-break: break-word">
      {{ getCookie('click-appversion') }}
    </p>
    <div @click.stop="goToDetailPage(feeItem?.id)">
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
            v-if="feeItem?.type_need?.id !== 2"
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
                  query: { completed: false },
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
      <UiCollectionProgress
        :amount="amountData"
        is-completed="false"
      ></UiCollectionProgress>
    </div>
    <div v-ripple.500="'rgba(255, 255, 255, 0.35)'" class="help-btn">
      <UiButton
        :text-btn="$t('main.btn')"
        :with-disabled="false"
        @click="goToPaidPage(feeItem?.id)"
      ></UiButton>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore()
const router = useRouter()
const props = defineProps({
  feeItem: {
    type: Object,
    required: true,
  },
})
const config = useRuntimeConfig()
const amountData = reactive({
  collectedAmount: props.feeItem?.collected || 0,
  amount: props.feeItem?.amount,
  remainsAmount: props.feeItem?.remains || 0,
})

const goToPaidPage = (feeId) => {
  router.push(`paid/${feeId}`)
}

const goToDetailPage = (feeId) => {
  appStore.fromCompletedPage = false
  appStore.fromMainPage = true
  router.push({
    path: `/main/${feeId}`,
    query: { completed: false },
  })
}
</script>

<style lang="scss" scoped>
.help-btn {
  padding-bottom: 10px;
}
</style>
