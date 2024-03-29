<template>
  <div class="paid-page">
    <HeaderComponent
      left-route="/main"
      center
      center-text="Нужна помощь"
    ></HeaderComponent>
    <div class="paid-container">
      <template v-if="loading">
        <PaidPageSkeleton></PaidPageSkeleton>
      </template>
      <template v-else>
        <div>
          <div class="chart-card">
            <div class="user-disease">
              <NuxtImg
                class="image-user"
                :src="`https://dev-promo23.click.uz/storage/${patientData?.patient_photo}`"
                alt="user"
              ></NuxtImg>
              <div style="width: calc(100% - 100px)">
                <div class="name">
                  <div>
                    {{
                      patientData?.patient_name +
                        ' ' +
                        patientData?.patient_surname || ''
                    }}
                    <span>({{ patientData?.patient_age }} года)</span>
                  </div>
                  <div></div>
                </div>
                <div class="city">
                  {{
                    $i18n.locale === 'uz'
                      ? patientData?.region?.name_uz
                      : $i18n.locale === 'en'
                        ? patientData?.region?.name_en
                        : patientData?.region?.name_ru
                  }}
                </div>
                <UiBorderLine></UiBorderLine>
                <div class="disease">
                  {{
                    $i18n.locale === 'uz'
                      ? patientData?.sick_category?.name_uz
                      : $i18n.locale === 'en'
                        ? patientData?.sick_category?.name_en
                        : patientData?.sick_category?.name_ru
                  }}
                </div>
              </div>
            </div>
            <UiCollectionProgress
              :amount="{
                collectedAmount: patientData?.collected || 0,
                amount: patientData?.amount,
                remainsAmount: patientData?.remains || 0,
              }"
              is-completed="false"
            ></UiCollectionProgress>
          </div>
          <div class="warning-container">
            <NuxtImg
              width="24"
              height="24"
              src="/images/info.svg"
              alt="info"
            ></NuxtImg>
            <div class="text">
              При нажатии на кнопку "Пожертвовать" вы будете перенаправлены на
              страницу оплаты в фонд Mehrli qo’llar. Сумма, которую вы укажете,
              будет переведена на счет этого фонда.
            </div>
          </div>
        </div>
      </template>
      <div>
        <div class="search-container">
          <label class="label-text" for="paid-summ">Сумма помощи</label>
          <input
            id="paid-summ"
            type="text"
            placeholder="Введите сумму помощи"
          />
        </div>
        <div class="close-paid">
          <div class="text">Закрыть весь сбор (11 000 000 сумов)</div>
        </div>
      </div>
      <div
        v-ripple.500="'rgba(255, 255, 255, 0.35)'"
        style="padding: 20px 0; margin: 0 20px"
      >
        <UiButton
          class="btn"
          text-btn="Пожертвовать"
          :with-disabled="false"
        ></UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toast-notification'
import { getDetailPatient } from '~/services/app.api'
import { parseErrorsFromResponse } from '~/utils'
import HeaderComponent from '~/components/ui/HeaderComponent.vue'
import PaidPageSkeleton from '~/components/skeleton/PaidPageSkeleton.vue'

const heightDevice = inject('devicePlatform')
const $toast = useToast()
const route = useRoute()
const router = useRouter
const id = computed(() => route.params.id)
const patientData = ref(null)
const loading = ref(false)

const PatientData = (patientId) => {
  loading.value = true
  getDetailPatient(+patientId)
    .then((response) => {
      patientData.value = response.data?.data
      loading.value = false
    })
    .catch((err) => {
      $toast.error(parseErrorsFromResponse(err))
      router.push('/error')
    })
}

PatientData(id.value)
</script>

<style lang="scss" scoped>
.paid-page {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  & .paid-container {
    height: calc(v-bind(heightDevice) - 80px);
    max-height: calc(v-bind(heightDevice) - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    & .warning-container {
      display: flex;
      gap: 5px;
      margin: 16px 20px 0;
      border-radius: 12px;
      padding: 15px 10px;
      background: rgba(255, 255, 255, 0.6);
    }

    & .text {
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      color: #363845;
    }
    & .search-container {
      position: relative;
      margin: 10px 0 25px;
      padding: 0 20px 18px;
      & .label-text {
        font-weight: 400;
        font-size: 10px;
        line-height: 160%;
        color: #6a6a6a;
      }
      & input {
        position: relative;
        border: 1px solid rgb(183, 184, 198);
        border-radius: 10px;
        height: 45px;
        background: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 13px 10px 14px 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 129%;
        letter-spacing: 0;
        text-align: left;
        &::placeholder {
          font-size: 14px;
          font-weight: 400;
          line-height: 129%;
          letter-spacing: 0;
          text-align: left;
          color: #b3b7ce;
        }
        &:focus {
          border: 1px solid #0073ff;
          outline: 0;
        }
      }
    }
    & .close-paid {
      margin: 10px 20px;
      border-radius: 6px;
      padding: 12px 15px;
      height: 38px;
      background: #fff;
      & .text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 12px;
        color: #363845;
      }
    }
  }
}
</style>
