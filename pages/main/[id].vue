<template>
  <div class="detail-page">
    <UiHeaderComponent
      center
      center-text="Личная карточка"
      left-route="/main"
    ></UiHeaderComponent>
    <template v-if="loading">
      <DetailPatientSkeleton></DetailPatientSkeleton>
    </template>
    <template v-else>
      <div class="detail-container">
        <div>
          <div class="badge-ui">
            <UiBadge
              :status-text="'ID ' + patientData?.id"
              back-color="var(--badge-back-color)"
              colour="var(--badge-color)"
            ></UiBadge>
          </div>
          <CharityPatient :patient="patient" with-city></CharityPatient>
          <DiagnosCard
            :patient="patientData"
            :is-completed="
              Boolean(
                patientData?.status?.id === 4 || patientData?.status?.id === 5,
              )
            "
          ></DiagnosCard>
          <HistoryInfo :history-patient="patientData"></HistoryInfo>
          <template v-if="patientData?.transactions?.length">
            <div
              v-for="(transactionItem, index) in patientData?.transactions"
              :key="transactionItem?.id"
            >
              <ReportTransactions :key="index"></ReportTransactions>
            </div>
          </template>
        </div>
        <div
          v-if="patientData?.status?.id !== 4 || patientData?.status?.id !== 5"
          class="btn-help"
        >
          <UiButton :with-disabled="false"></UiButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toast-notification'
import { getDetailPatient } from '~/services/app.api'
import { parseErrorsFromResponse } from '~/utils'
import DetailPatientSkeleton from '~/components/skeleton/DetailPatientSkeleton.vue'

const loading = ref(false)
const patientData = ref(null)
const patient = reactive({
  name: null,
  surname: null,
  age: null,
  photo: null,
  region: null,
})
const heightDevice = inject('devicePlatform')
const route = useRoute()
const router = useRouter()
const $toast = useToast()

const detailPatientData = () => {
  loading.value = true
  getDetailPatient(+route.params.id)
    .then((response) => {
      patientData.value = response.data?.data
      patient.name = response.data?.data?.patient_name
      patient.surname = response.data?.data?.patient_surname
      patient.age = response.data?.data?.patient_age
      patient.photo = response.data?.data?.patient_photo
      patient.region = response.data?.data?.region
      loading.value = false
    })
    .catch((err) => {
      $toast.error(parseErrorsFromResponse(err))
      router.push('/error')
    })
}

detailPatientData()
</script>

<style lang="scss" scoped>
.detail-page {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: hidden;
  & .detail-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(v-bind(heightDevice) - 75px);
    height: calc(v-bind(heightDevice) - 75px);
    padding-bottom: 8px;
    overflow-y: scroll;
    & .badge-ui {
      padding: 0 20px;
    }
    & .btn-help {
      margin: 20px 20px 10px;
    }
  }
}
</style>
