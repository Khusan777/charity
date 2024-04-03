<template>
  <div v-if="loading" class="loader-container">
    <NuxtImg
      v-if="appStore.theme === 'light'"
      style="width: 100%; padding: 0 60px"
      src="/images/logo_light.svg"
      alt="logo"
    ></NuxtImg>
    <NuxtImg
      v-else
      style="width: 100%; padding: 0 60px"
      src="/images/logo_dark.svg"
      alt="logo"
    ></NuxtImg>
  </div>
  <div v-else class="start-container">
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
          <div>
            Это единая площадка помощи благотворительным фондам,
            <strong>созданная Click.</strong>
          </div>
          <div>
            В этом разделе вы можете оказывать адресное пожертвование: видеть
            кому нужна помощь, какой фонд ведет сбор и прогресс по сбору денег.
          </div>
          <div>Мы объединяем не только фонды, мы объединяем сердца!</div>
        </div>
      </div>
      <div style="padding: 0 20px 20px">
        <!--        <UiCheckbox-->
        <!--          v-model:checked="acceptCheck"-->
        <!--          label="Соглашаюсь с политикой<br />обработки <span style='text-decoration:underline; color:#0073ff'>персональных данных</span>"-->
        <!--        ></UiCheckbox>-->
        <div
          v-ripple.500="'rgba(255, 255, 255, 0.35)'"
          style="padding-top: 15px"
        >
          <UiButton
            v-if="acceptBtn"
            class="btn-accept"
            :with-disabled="true"
            text-btn="Продолжить"
          ></UiButton>
          <UiButton
            v-else
            class="btn-accept"
            :with-disabled="false"
            text-btn="Продолжить"
            @click="acceptOfferta"
          ></UiButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toast-notification'
import { useAppStore } from '~/stores/AppStore'
import { getMe } from '~/services/app.api'
import { parseErrorsFromResponse, setToken } from '~/utils'
import { apiClient } from '~/services/apiClient'

const appStore = useAppStore()
const heightDevice = inject('devicePlatform')
const { user, webSession } = storeToRefs(appStore)
const $toast = useToast()
const loading = ref(true)
const acceptBtn = ref(false)
const isNotAcceptCode = ref(null)
const router = useRouter()

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)

const getUserData = () => {
  getMe({
    web_session: webSession.value ? webSession.value : cookieWebSession.value,
  })
    .then((response) => {
      loading.value = false
      if (response.data?.user) {
        user.value = response.data?.user
        setToken(response.data?.token)
        router.replace('/main')
      }
    })
    .catch((err) => {
      loading.value = false
      isNotAcceptCode.value = err.response?.data?.error?.code
      if (isNotAcceptCode.value !== 1001) {
        router.push('error')
      }
    })
}

getUserData()
const acceptOfferta = () => {
  apiClient.defaults.headers.common['Accept-Language'] = appStore.lang
  acceptBtn.value = true
  getMe({
    web_session: webSession.value ? webSession.value : cookieWebSession.value,
    activate: 1,
  })
    .then((response) => {
      user.value = response.data?.user
      setToken(response.data?.token)
      if (user.value) {
        router.replace('/main')
      }
    })
    .catch((err) => {
      $toast.error(parseErrorsFromResponse(err))
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
  overflow: hidden;
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
    min-height: 200px;
    background-size: cover;
  }
  & .title {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: var(--start-title);
  }
  & .description {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 400;
    line-height: 133%;
    color: var(--start-description);
    & div {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 320px) {
  .start-container {
    & .start-image {
      width: 100%;
      height: 200px;
      background-size: cover;
    }
  }
}
@media (max-width: 320px) {
  .start-container {
    & .start-image {
      width: 100%;
      height: 200px;
      background-size: cover;
    }
  }
}
@media (min-width: 805px) {
  .start-container {
    & .start-image {
      width: 100%;
      height: auto;
      background-size: cover;
    }
  }
}
@media (max-width: 280px) {
  .start-container {
    & .start-image {
      width: 100%;
      height: 250px;
      background-size: cover;
    }
  }
}
</style>
