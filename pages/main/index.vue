<template>
  <div class="index-container">
    <div v-if="searchInputShow" class="search-container">
      <input
        ref="inputRef"
        v-model="queryFee.search"
        type="text"
        maxlength="40"
        :placeholder="$t('main.search')"
      />
      <template
        v-if="
          !indexFee.data?.length && !indexFee.loading && indexFee.isSearched
        "
      >
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
            <div class="text-message">{{ $t('not-found') }}</div>
          </div>
        </div>
      </template>
      <div
        v-if="queryFee.search?.length && appStore.theme === 'light'"
        class="x-icon"
        @click="clearInputValue"
      >
        <NuxtImg
          width="20"
          height="20"
          style="color: var(--search-icon-color)"
          src="/images/x-search-icon-light.svg"
          alt="settings"
        />
      </div>
      <div
        v-if="queryFee.search?.length && appStore.theme === 'dark'"
        class="x-icon"
        @click="clearInputValue"
      >
        <NuxtImg
          width="20"
          height="20"
          style="color: var(--search-icon-color)"
          src="/images/x-search-icon-dark.svg"
          alt="settings"
        />
      </div>
    </div>
    <template
      v-if="!indexFee.data?.length && !indexFee.loading && !indexFee.isSearched"
    >
      <div
        class="text-without-content"
        style="
          padding: 0 20px 10px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        "
      >
        <div class="text-message pt-0">
          {{ $t('main.without-content') }}
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px">
          <div class="not-item">
            <div class="not-item-top">
              <div class="not-item-top-icon">
                <NuxtImg src="/images/not-1.svg"></NuxtImg>
              </div>
              <div class="not-item-top-toptitle">
                <div class="not-item-top-title">Mehrli qollar</div>
                <div class="not-item-top-hr"></div>
              </div>
            </div>
            <div class="not-item-des">{{ $t('fonds.des') }}</div>
            <a
              href="https://my.click.uz/services/pay/?service_id=11854"
              class="not-item-btn"
              >{{ $t('main.help') }}</a
            >
          </div>
          <div class="not-item">
            <div class="not-item-top">
              <div class="not-item-top-icon">
                <NuxtImg src="/images/not-2.svg"></NuxtImg>
              </div>
              <div class="not-item-top-toptitle">
                <div class="not-item-top-title">Ezgu amal</div>
                <div class="not-item-top-hr"></div>
              </div>
            </div>
            <div class="not-item-des">{{ $t('fonds.des2') }}</div>
            <a
              href="https://my.click.uz/services/pay/?service_id=31601"
              class="not-item-btn"
              >{{ $t('main.help') }}</a
            >
          </div>
        </div>
      </div>
    </template>
    <template v-if="indexFee.loading">
      <div class="loading-container">
        <div class="description">{{ $t('main.subtitle') }}</div>
        <div>
          <MainSkeleton></MainSkeleton>
          <MainSkeleton></MainSkeleton>
          <MainSkeleton></MainSkeleton>
        </div>
      </div>
    </template>
    <template v-if="indexFee.data?.length">
      <div ref="el" class="help-block">
        <div class="description">{{ $t('main.subtitle') }}</div>
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
          <p style="color: #fff3cd">URl {{ config.public.urlHost }}</p>
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
import { debounce } from '~/utils'
import { useAllServices } from '~/composables/app.api'

const config = useRuntimeConfig()
const { getFee } = useAllServices()
const appStore = useAppStore()
definePageMeta({
  layout: 'main',
})
const inputRef = ref()
const searchInputShow = ref(false)
const el = shallowRef(null)
const heightDevice = inject('devicePlatform')
const indexFee = reactive({
  loading: false,
  loader: false,
  data: null,
  isSearched: false,
})
const paginationData = ref(null)
const queryFee = reactive({
  page: 1,
  status_id: 3,
  search: null,
})

const calculateHeightWithoutSearch = computed(() =>
  !indexFee.data?.length ? '45px' : '0px',
)

const clearInputValue = () => {
  queryFee.search = null
  inputRef.value?.focus()
}

const getFeeIndex = () => {
  indexFee.loading = true
  getFee(queryFee)
    .then((response) => {
      indexFee.data = response.data?.data
      if (indexFee.data?.length) {
        searchInputShow.value = true
      }
      paginationData.value = response.data?.pagination
      indexFee.loading = false
    })
    .catch(() => {
      indexFee.loading = false
    })
}
getFeeIndex()

const getFeePagination = async () => {
  indexFee.loader = true
  await getFee(queryFee)
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
    if (paginationData.value?.currentPage < paginationData.value?.totalPages) {
      queryFee.page += 1
      await getFeePagination()
    }
  },
  { distance: 50 },
)

watch(
  () => queryFee.search,
  debounce((value) => {
    if (value) {
      indexFee.isSearched = true
    } else {
      indexFee.isSearched = false
    }
    if (queryFee.page > 1) {
      queryFee.page = 1
    }
    getFeeIndex(queryFee)
  }, 500),
)
</script>

<style lang="scss" scoped>
.loading-container {
  height: calc(v-bind(heightDevice) - 165px);
  max-height: calc(v-bind(heightDevice) - 165px);
  overflow-y: scroll;
  //& .text {
  //  padding: 0 20px 5px;
  //  color: var(--need-help);
  //  font-size: 16px;
  //  font-weight: 600;
  //  line-height: 19px;
  //  letter-spacing: 0;
  //  text-align: left;
  //}
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
  & .x-icon {
    background: var(--search-bg);
    right: 30px;
    top: 6.5px;
    position: absolute;
  }
}

.text-without-content {
  overflow-y: auto;
  max-height: calc(
    v-bind(heightDevice) - 220px + v-bind(calculateHeightWithoutSearch)
  );
  height: calc(
    v-bind(heightDevice) - 220px + v-bind(calculateHeightWithoutSearch)
  );
  //& .btn-container {
  //  display: flex;
  //  justify-content: center;
  //  padding: 0 20px;
  //  left: 0;
  //  bottom: 0;
  //  width: 100%;
  //  margin-bottom: 15px;
  //  & .btn {
  //    border-radius: 10px;
  //    background: linear-gradient(0deg, #0073ff 0%, #00c2ff 100%), #fff;
  //    height: 40px;
  //    line-height: 40px;
  //    border: 0;
  //    width: 100%;
  //    color: #ffffff;
  //    display: flex;
  //    align-items: center;
  //    justify-content: center;
  //    text-align: center;
  //    font-size: 14px;
  //    font-weight: 700;
  //  }
  //}
}

.help-block {
  height: calc(v-bind(heightDevice) - 220px);
  max-height: calc(v-bind(heightDevice) - 220px);
  overflow-y: auto;
  //& .text {
  //  padding: 0 20px 5px;
  //  color: var(--need-help);
  //  font-size: 16px;
  //  font-weight: 600;
  //  line-height: 19px;
  //  letter-spacing: 0;
  //  text-align: left;
  //}
  & .description {
    padding: 0 20px 10px;
    color: var(--need-help-desc);
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0;
    text-align: left;
    font-weight: 500;
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
.not-item {
  background: var(--bg3);
  padding: 10px;
  border-radius: 10px;
  &-top {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    &-icon {
      img {
        width: 35px;
        height: 35px;
        border-radius: 35px;
      }
    }
    &-title {
      line-height: 19.2px;
      font-size: 16px;
      font-weight: 600;
      color: var(--text);
    }
    &-toptitle {
      display: flex;
      flex-direction: column;
      gap: 7px;
      width: calc(100% - 45px);
    }
    &-hr {
      width: 100%;
      height: 1px;
      background: var(--border);
    }
  }
  &-des {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 15px;
    color: var(--text2);
  }
  &-btn {
    width: 100%;
    background: linear-gradient(
      0deg,
      rgb(0, 115, 255) -1.25%,
      rgb(0, 194, 255) 100%
    );
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    border: 0;
    font-size: 14px;
    font-weight: 600;
    display: block;
    text-align: center;
  }
}
</style>
