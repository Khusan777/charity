<template>
  <div v-if="loading" class="loader-container">
    <NuxtImg src="/images/logo.svg" alt="logo"></NuxtImg>
  </div>
  <div v-else class="start-container">
    {{ heightDevice }}
    <template v-if="isNotAcceptCode === 1001">
      <NuxtImg
        format="webp"
        style="padding: 0"
        class="start-image"
        src="/images/background.png"
        alt="background"
      ></NuxtImg>
      <div>
        <div class="title">Добро пожаловать!</div>
        <div class="description">
          Мы соединяем тех, кто может помочь, с теми, кому нужна помощь. Мы
          создаем простой способ участия в благотворительности для пользователей
          Click и возможность регулярно получать помощь для некоммерческих
          организаций.
        </div>
      </div>
      <div style="padding: 0 20px 20px">
        <UiCheckbox
          v-model:checked="acceptCheck"
          label="Соглашаюсь с политикой<br />обработки <span style='text-decoration:underline; color:#0073ff'>персональных данных</span>"
        ></UiCheckbox>
        <UiButton
          v-if="!acceptCheck || acceptBtn"
          class="btn-accept"
          :with-disabled="true"
          text-btn="Готово"
        ></UiButton>
        <UiButton
          v-else
          class="btn-accept"
          :with-disabled="false"
          text-btn="Готово"
          @click="acceptOfferta"
        ></UiButton>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toast-notification'
import { useAppStore } from '~/stores/AppStore'
import { getMe } from '~/services/app.api'

const loading = ref(true)
const acceptBtn = ref(false)
const isNotAcceptCode = ref(null)
const router = useRouter()
const acceptCheck = ref(false)
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const { user } = storeToRefs(appStore)
const $toast = useToast()

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)
if (!appStore.webSession) {
  appStore.setWebSession(cookieWebSession.value)
}

const getUserData = async () => {
  await getMe({
    web_session: appStore.webSession
      ? appStore.webSession
      : cookieWebSession.value,
  })
    .then((response) => {
      loading.value = false
      if (response.data?.user) {
        user.value = response._data?.user
        router.replace('/main')
      }
    })
    .catch((err) => {
      loading.value = false
      isNotAcceptCode.value = err.response?.data?.error?.code
    })
}

getUserData()

const acceptOfferta = async () => {
  acceptBtn.value = true
  await getMe({
    web_session: appStore.webSession
      ? appStore.webSession
      : cookieWebSession.value,
    activate: 1,
  })
    .then((response) => {
      user.value = response.data?.user
      if (user.value) {
        router.replace('/main')
      }
    })
    .catch((err) => {
      $toast.error(err?.response?.data?.error?.message)
    })
    .finally(() => {
      acceptBtn.value = false
    })
}
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: v-bind(heightDevice);
  max-height: v-bind(heightDevice);
}
.start-container {
  height: v-bind(heightDevice);
  max-height: v-bind(heightDevice);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  & .start-image {
    width: 100%;
    max-height: 365px;
    background-size: cover;
  }
  & .title {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: #363845;
  }
  & .description {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: #2c2d35;
  }
}

@media (max-width: 320px) {
  .start-container {
    & .start-image {
      height: 280px;
    }
  }
}
</style>
