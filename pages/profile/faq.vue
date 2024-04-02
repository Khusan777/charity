<template>
  <div class="faq">
    <UiHeaderComponent
      center
      center-text="Вопросы и ответы"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="faq-wrapper">
      <div v-if="loading" class="loading">
        <MainSkeleton></MainSkeleton>
        <MainSkeleton></MainSkeleton>
      </div>
      <div v-else class="faq-list">
        <div v-for="faq in getFaqs" :key="faq.id" class="faq-item">
          <button
            class="faq-item-top collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#faq' + faq.id"
            aria-expanded="false"
            :aria-controls="'faq' + faq.id"
          >
            <div class="faq-item-title">{{ faq.name_ru }}</div>
            <div class="faq-item-icon">
              <NuxtImg src="/images/tick.svg"></NuxtImg>
            </div>
          </button>
          <div :id="'faq' + faq.id" class="collapse faq-item-body">
            <div class="faq-item-content">
              <div class="faq-item-body" v-html="faq.description_ru"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiClient } from '~/services/apiClient'
import { useAppStore } from '~/stores/AppStore'
import MainSkeleton from '~/components/skeleton/MainSkeleton.vue'

export default {
  name: 'Faq',
  components: {
    MainSkeleton,
  },
  data() {
    return {
      appStore: useAppStore(),
      heightDevice: inject('devicePlatform'),
      loading: true,
    }
  },
  computed: {
    getFaqs() {
      const items = []
      this.appStore?.info?.forEach((item) => {
        if (item.type === 2) {
          items.push(item)
        }
      })
      return items
    },
  },
  mounted() {
    if (!this.appStore.info) {
      apiClient.get('/info').then((res) => {
        this.appStore.info = res.data
        this.loading = false
      })
    }
  },
}
</script>

<style scoped lang="scss">
.faq {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(100% - 75px);
    max-height: calc(100% - 75px);
    padding: 0 20px 20px;
    overflow-y: scroll;
  }
  &-item {
    margin-bottom: 16px;
    background: var(--bg3);
    border-radius: 6px;
    padding: 10px 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &-top {
      background: none;
      border: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
    }
    &-top &-icon {
      img {
        transform: rotate(180deg);
      }
    }
    &-top.collapsed &-icon {
      img {
        transform: rotate(0);
      }
    }
    &-title {
      width: calc(100% - 35px);
      color: var(--text);
      font-size: 12px;
      font-weight: 500;
      text-align: left;
    }
    &-icon {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 25px;
      }
    }
    &-content {
      margin-top: 10px;
      color: var(--text5);
      font-size: 12px;
      padding-top: 5px;
      border-top: 1px solid var(--border);
    }
  }
}
.loading {
  margin: 0 -20px;
}
</style>
