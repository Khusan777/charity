<template>
  <div class="index-container">
    <div class="search-container">
      <input
        v-model="queryFee.search"
        type="text"
        maxlength="40"
        placeholder="Введите ФИО"
      />
      <template v-if="!indexFee.data?.length && !indexFee.loading">
        <div style="width: 100%">
          <div
            style="
              padding: 30px 0 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
            <NuxtImg
              v-if="appStore.theme === 'light'"
              style="margin: auto; display: block"
              width="35"
              height="35"
              src="/images/icon-search-light.svg"
              alt="search-icon"
            ></NuxtImg>
            <NuxtImg
              v-else
              style="margin: auto; display: block"
              width="35"
              height="35"
              src="/images/icon-search-light.svg"
              alt="search-icon"
            ></NuxtImg>
            <div class="text-message">По вашему запросу ничего не найдено</div>
          </div>
        </div>
      </template>
      <!--      <div-->
      <!--        ref="offCanvas"-->
      <!--        data-bs-toggle="offcanvas"-->
      <!--        data-bs-target="#offcanvasBottom"-->
      <!--        aria-controls="offcanvasBottom"-->
      <!--        class="placeholder"-->
      <!--      >-->
      <!--        <NuxtImg-->
      <!--          width="20"-->
      <!--          height="20"-->
      <!--          style="color: var(&#45;&#45;search-icon-color)"-->
      <!--          src="/images/settings.svg"-->
      <!--          alt="settings"-->
      <!--        />-->
      <!--      </div>-->
    </div>
    <template v-if="indexFee.loading">
      <div class="loading-container">
        <div class="text">Нуждаются в помощи</div>
        <div class="description">
          Сейчас им крайне необходима<br />
          ваша помощь.
        </div>
        <div>
          <MainSkeleton></MainSkeleton>
          <MainSkeleton></MainSkeleton>
          <MainSkeleton></MainSkeleton>
        </div>
      </div>
    </template>
    <template v-if="indexFee.data?.length">
      <div ref="el" class="help-block">
        <div class="text">Нуждаются в помощи</div>
        <div class="description">
          Сейчас им крайне необходима<br />
          ваша помощь.
        </div>
        <div v-for="feeItem in indexFee?.data" :key="feeItem">
          <ChartCardNotCollected
            :key="feeItem.id"
            :fee-item="feeItem"
          ></ChartCardNotCollected>
          <!--      <div v-if="index === 1" class="charity-banner">-->
          <!--        <div class="text">-->
          <!--          Наша миссия — протянуть руку тем, кто действительно в этом нуждается.-->
          <!--          Помощь больным детям — основная наша задача.-->
          <!--        </div>-->
          <!--        <div-->
          <!--          v-ripple.500="'rgba(255, 255, 255, 0.35)'"-->
          <!--          class="btn-help"-->
          <!--          @click="$router.push('/profile/form')"-->
          <!--        >-->
          <!--          Мне нужна помощь-->
          <!--        </div>-->
          <!--      </div>-->
        </div>
        <div v-if="indexFee.loader" class="loader-wrapper">
          <span class="loader-anim"></span>
        </div>
        <!--    <UiOffCanvasRegions></UiOffCanvasRegions>-->
      </div>
    </template>
  </div>
</template>

<script setup>
import MainSkeleton from '~/components/skeleton/MainSkeleton.vue'
import ChartCardNotCollected from '~/components/ChartCardNotCollected.vue'
import { getFee } from '~/services/app.api'
import { debounce } from '~/utils'

const appStore = useAppStore()
definePageMeta({
  layout: 'main',
})
const el = shallowRef(null)
const heightDevice = inject('devicePlatform')

const indexFee = reactive({
  loading: false,
  loader: false,
  data: null,
})
const paginationData = ref(null)
const queryFee = reactive({
  page: 1,
  status_id: 3,
  search: null,
})

const getFeeIndex = () => {
  indexFee.loading = true
  getFee(queryFee)
    .then((response) => {
      indexFee.data = response.data?.data
      paginationData.value = response.data
      indexFee.loading = false
    })
    .catch(() => {
      indexFee.loading = false
    })
}
getFeeIndex()

const getFeePagination = () => {
  indexFee.loader = true
  getFee(queryFee)
    .then((response) => {
      indexFee.data = [...indexFee.data, ...response.data?.data]
      paginationData.value = response.data
      indexFee.loader = false
    })
    .catch(() => {
      indexFee.loader = false
    })
}

useInfiniteScroll(el, async () => {
  if (
    paginationData.value?.next_page_url &&
    paginationData.value?.current_page <= paginationData.value?.last_page
  ) {
    queryFee.page += 1
    await getFeePagination()
  }
})

watch(
  () => queryFee.search,
  debounce(() => {
    if (queryFee.page > 1) {
      queryFee.page = 1
    }
    getFeeIndex(queryFee)
  }, 500),
)
</script>

<style lang="scss" scoped>
.index-container {
  height: calc(v-bind(heightDevice) - 155px);
  max-height: calc(v-bind(heightDevice) - 155px);
}
.loading-container {
  height: calc(v-bind(heightDevice) - 225px);
  max-height: calc(v-bind(heightDevice) - 225px);
  overflow-y: scroll;
  & .text {
    padding: 0 20px 5px;
    color: var(--need-help);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
  }
  & .description {
    padding: 0 20px 10px;
    color: var(--need-help-desc);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0;
    text-align: left;
  }
}
.search-container {
  position: relative;
  padding: 0 20px 18px;
  & input {
    position: relative;
    border: 1px solid rgb(183, 184, 198);
    border-radius: 10px;
    height: 40px;
    background: var(--search-bg) url('/images/search.svg') no-repeat 10px center;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 10px 12px 35px;
    color: var(--search-placeholder);
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
      color: var(--search-placeholder);
    }
    &:focus {
      border-color: #0073ff;
      color: var(--search-placeholder);
      outline: 0;
    }
  }
  //& .placeholder {
  //  background: var(--search-bg);
  //  right: 40px;
  //  top: 6px;
  //  position: absolute;
  //}
}

.help-block {
  height: calc(v-bind(heightDevice) - 220px);
  max-height: calc(v-bind(heightDevice) - 220px);
  overflow-y: auto;
  & .text {
    padding: 0 20px 5px;
    color: var(--need-help);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
  }
  & .description {
    padding: 0 20px 10px;
    color: var(--need-help-desc);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0;
    text-align: left;
  }
}

//.charity-banner {
//  display: flex;
//  flex-direction: column;
//  object-fit: cover;
//  padding: 15px 15px 15px;
//  position: relative;
//  margin: 20px;
//  height: auto;
//  background: url('/images/charity.svg') 100%/100%;
//  border-radius: 12px;
//  background-repeat: no-repeat;
//  & .text {
//    font-weight: 400;
//    font-size: 10px;
//    color: #fff;
//    width: 65%;
//    margin-bottom: 6px;
//  }
//  & .btn-help {
//    width: 40%;
//    border-radius: 6px;
//    height: 28px;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    background: #fff;
//    font-weight: 600;
//    font-size: 10px;
//    line-height: 120%;
//    color: #363845;
//  }
//}
</style>
