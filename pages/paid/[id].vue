<template>
  <div class="paid-page">
    <HeaderComponent
      v-if="loading"
      left-route="/main"
      center
      :center-text="$t('paid-page.header-text')"
    ></HeaderComponent>
    <HeaderComponent
      v-else
      :left-route="{
        path: `/main/${patientData?.id}`,
        query: { completed: false },
      }"
      center
      :center-text="$t('paid-page.header-text')"
    ></HeaderComponent>
    <div class="paid-container">
      <template v-if="loading">
        <div>
          <PaidPageSkeleton></PaidPageSkeleton>
          <div class="warning-container">
            <div v-if="loading" style="width: 100%">
              <div v-for="i in 5" :key="i" style="padding: 2px 0">
                <UiAnimatedSkeleton
                  height="12px"
                  width="100%"
                  border-radius="12px"
                ></UiAnimatedSkeleton>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div>
          <div class="chart-card">
            <div class="user-disease">
              <NuxtImg
                class="image-user"
                :src="`${config.public.apiBase}/storage/${patientData?.patient_photo}`"
                alt="user"
              ></NuxtImg>
              <div style="width: calc(100% - 100px)">
                <UiBadge
                  :status-text="'ID ' + patientData?.external_id"
                  back-color="var(--badge-back-color)"
                  colour="var(--badge-color)"
                ></UiBadge>
                <div class="name">
                  <div>
                    {{
                      patientData?.patient_surname +
                        ' ' +
                        patientData?.patient_name || ''
                    }}
                    <span
                      >({{
                        patientData?.patient_age === 0
                          ? 1
                          : patientData?.patient_age
                      }}
                      {{
                        patientData?.patient_age > 1 &&
                        patientData?.patient_age <= 4
                          ? $t('year', 1)
                          : patientData?.patient_age === 0 ||
                              patientData?.patient_age === 1
                            ? $t('year', 0)
                            : $t('year', 2)
                      }})</span
                    >
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
              {{ $t('paid-page.warning-text') }}
            </div>
          </div>
        </div>
      </template>
      <div>
        <div class="search-container">
          <label class="label-text" for="help-summa">
            {{ $t('paid-page.summa-label') }}
          </label>
          <input
            id="help-summa"
            v-model="summa"
            type="text"
            minlength="4"
            inputmode="decimal"
            :placeholder="$t('paid-page.placeholder')"
            @input="filterNonNumeric"
          />
        </div>
        <div v-if="loading" style="border-radius: 6px; padding: 12px 15px">
          <UiAnimatedSkeleton
            width="100%"
            height="38px"
            border-radius="6px"
          ></UiAnimatedSkeleton>
        </div>
        <div v-else class="close-paid">
          <div
            class="text"
            @click="addSpaceRemainsSumma(String(patientData?.remains || 0))"
          >
            {{ $t('paid-page.closed-collection') }} ({{
              patientData?.remains === null
                ? 0
                : String(patientData?.remains)?.length > 4
                  ? String(
                      patientData?.remains
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                    )
                  : String(
                      patientData?.remains
                        ?.toString()
                        .replace(/\B(?=(\d{4})+(?!\d))/g, ' '),
                    )
            }}
            {{ $t('valyuta') }})
          </div>
        </div>
      </div>
    </div>
    <div style="padding: 20px 0; margin: 0 20px">
      <a
        v-if="summa?.length >= 4"
        v-ripple.500="'rgba(255, 255, 255, 0.35)'"
        :href="`https://my.click.uz/services/pay/?service_id=32840&amount=${summa?.replace(
          / /g,
          '',
        )}&transaction_param=${patientData?.external_id}&return_url=https%3A%2F%2Fmy.click.uz%2Fapp%2FwebView%3Fauth%3Dtrue%26url%3Dhttps%253A%252F%252Fcharity.click.uz`"
        class="paid-active"
      >
        {{ $t('paid-page.btn') }}</a
      >
      <button v-else class="paid-disabled">{{ $t('paid-page.btn') }}</button>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toast-notification'
import { getDetailPatient } from '~/services/app.api'
import { parseErrorsFromResponse } from '~/utils'
import HeaderComponent from '~/components/ui/HeaderComponent.vue'
import PaidPageSkeleton from '~/components/skeleton/PaidPageSkeleton.vue'

const config = useRuntimeConfig()
const summa = ref('')
const heightDevice = inject('devicePlatform')
const $toast = useToast()
const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id)
const patientData = ref(null)
const loading = ref(false)

const PatientData = () => {
  loading.value = true
  getDetailPatient(id.value)
    .then((response) => {
      patientData.value = response.data?.data
      loading.value = false
    })
    .catch((err) => {
      $toast.error(parseErrorsFromResponse(err))
      router.push('/error')
    })
}

PatientData()

onMounted(() => {
  summa.value = ''
})

const addSpaceRemainsSumma = (remainsSumma) => {
  summa.value = remainsSumma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const filterNonNumeric = () => {
  summa.value = summa.value
    .replace(/[^0-9]/g, '')
    .split('')
    .reverse()
    .join('')
    .replace(/([0-9]{3})/g, '$1 ')
    .split('')
    .reverse()
    .join('')
    .trim()
}
</script>

<style lang="scss" scoped>
.paid-page {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  & .paid-container {
    height: calc(v-bind(heightDevice) - 150px);
    max-height: calc(v-bind(heightDevice) - 150px);
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
      background: var(--warning-bg);
    }

    & .text {
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      color: var(--text);
    }
    & .search-container {
      position: relative;
      margin: 10px 0 25px;
      padding: 0 20px 18px;
      & .label-text {
        font-weight: 400;
        font-size: 10px;
        line-height: 160%;
        color: var(--city-name);
      }
      & input {
        position: relative;
        border: 1px solid rgb(183, 184, 198);
        border-radius: 10px;
        height: 45px;
        background: var(--chart-card-bg);
        width: 100%;
        color: var(--input-summ);
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
          color: var(--help-summ);
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
      background: var(--published-bg);
      & .text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 12px;
        color: var(--user-name);
      }
    }
  }
  & .paid-active {
    all: unset;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0;
    background: linear-gradient(
      0deg,
      rgb(0, 115, 255) -1.25%,
      rgb(0, 194, 255) 100%
    );
    border-radius: 10px;
  }
  & .paid-disabled {
    all: unset;
    line-height: 17px;
    letter-spacing: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cccfde;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #575965;
  }
}
</style>
