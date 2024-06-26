<template>
  <div class="detail-page">
    <UiHeaderComponent
      center
      :center-text="$t('patient-detail.header-text')"
      :left-route="
        appStore.fromMainPage
          ? '/main'
          : appStore.navMyFees
            ? '/profile/requests'
            : appStore.fromCompletedPage
              ? '/completed'
              : '/main'
      "
    ></UiHeaderComponent>
    <template v-if="loading">
      <DetailPatientSkeleton :height-calc="calculate"></DetailPatientSkeleton>
    </template>
    <template v-else>
      <div class="detail-container">
        <div>
          <div class="badge-ui">
            <UiBadge
              :status-text="'ID ' + patientData?.external_id"
              back-color="var(--badge-back-color)"
              colour="var(--badge-color)"
            ></UiBadge>
          </div>
          <CharityPatient :patient="patient" with-city></CharityPatient>
          <DiagnosCard
            :patient="patientData"
            :is-completed="
              Boolean(
                patientData?.status?.id === 4 ||
                  patientData?.status?.id === 5 ||
                  patientData?.status?.id === 7,
              )
            "
          ></DiagnosCard>
          <HistoryInfo :history-patient="patientData"></HistoryInfo>
          <!--          <template v-if="patientData?.transactions?.length">-->
          <!--            <ReportTransactions-->
          <!--              :transactions="patientData?.transactions"-->
          <!--            ></ReportTransactions>-->
          <!--          </template>-->
        </div>
      </div>
    </template>
    <div v-if="loading && route.query.completed" class="btn-help">
      <UiAnimatedSkeleton
        height="40px"
        width="100%"
        border-radius="10px"
      ></UiAnimatedSkeleton>
    </div>
    <div
      v-if="
        patientData?.status?.id !== 4 &&
        patientData?.status?.id !== 5 &&
        patientData?.status?.id !== 7 &&
        !loading
      "
      class="btn-help"
      @click="goToPaidPage(patientData?.id)"
    >
      <UiButton :text-btn="$t('main.btn')" :with-disabled="false"></UiButton>
    </div>
  </div>
</template>

<script setup>
import DetailPatientSkeleton from '~/components/skeleton/DetailPatientSkeleton.vue'
import { useAllServices } from '~/composables/app.api'

const { getDetailPatient, setToken, getMe } = useAllServices()
const appStore = useAppStore()
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
const calculate = computed(() =>
  route.query.completed === 'true' ? '85px' : '135px',
)

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)
const idPage = computed(() => route.params.id)

const goToPaidPage = (feeId) => {
  router.push(`/paid/${feeId}`)
}

const detailPatientData = () => {
  loading.value = true
  getDetailPatient(idPage.value)
    .then((response) => {
      patientData.value = response.data?.data
      patient.name = response.data?.data?.patient_name
      patient.surname = response.data?.data?.patient_surname
      patient.age = response.data?.data?.patient_age
      patient.photo = response.data?.data?.patient_photo
      patient.region = response.data?.data?.region
      loading.value = false
    })
    .catch(async () => {
      let requestPromise = null
      let response = null
      try {
        requestPromise = getMe({
          web_session: appStore.webSession
            ? appStore.webSession
            : cookieWebSession.value,
          activate: 1,
        })
        response = await requestPromise
        if (response) {
          if (response.data?.user) {
            appStore.user = response.data?.user
            setToken(response.data?.token)
          }
          return detailPatientData()
        }
      } catch (error) {
        await router.push('/error')
      } finally {
        requestPromise = null
      }
      return null
    })
}
detailPatientData()
</script>

<style lang="scss" scoped>
.detail-page {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  & .detail-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(v-bind(heightDevice) - v-bind(calculate));
    height: calc(v-bind(heightDevice) - v-bind(calculate));
    padding-bottom: 8px;
    overflow-y: scroll;
    & .badge-ui {
      padding: 0 20px;
    }
  }
  & .btn-help {
    margin: 10px 20px 10px;
  }
}
</style>
