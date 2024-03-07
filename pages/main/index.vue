<template>
  <div class="index-container">
    <p
      v-if="cookieData"
      style="
        user-select: all;
        color: #171717;
        margin: 0 20px;
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
      "
    >
      {{ cookieData }}
    </p>
    <template v-if="loading">
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
      <ChartCard></ChartCard>
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
import { useAppStore } from '~/stores/AppStore'
import BannerSkeleton from '~/components/skeleton/BannerSkeleton.vue'

definePageMeta({
  layout: 'main',
})
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const { loading } = storeToRefs(appStore)

const cookieData = computed(() => document?.cookie)
const sendRequest = () => {
  loading.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, 1500)
  }).then(() => {
    loading.value = false
  })
}

sendRequest()
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
