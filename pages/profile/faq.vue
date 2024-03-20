<template>
  <div class="faq">
    <UiHeaderComponent
      center
      center-text="Вопросы и ответы"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="faq-wrapper">
      <div class="faq-list">
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
        <!-- <div class="faq-item">
          <button
            class="faq-item-top collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            <div class="faq-item-title">
              Куда попадут деньги от пожертвований?
            </div>
            <div class="faq-item-icon">
              <NuxtImg src="/images/tick.svg"></NuxtImg>
            </div>
          </button>
          <div id="faq2" class="collapse faq-item-body">
            <div class="faq-item-content">
              Все денежные средства (пожертвования) через системы Payme, CLICK ,
              UZUM и боксов попадают на расчетный счет фонда, и оттуда
              распределяются по программам.
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { apiClient } from '~/services/apiClient'
import { useAppStore } from '~/stores/AppStore'
export default {
  name: 'Faq',
  data() {
    return {
      appStore: useAppStore(),
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
    if(!this.appStore.info){
      apiClient.get('/info').then((res) => {
        this.appStore.info = res.data
      })
    }
  },
}
</script>

<style scoped lang="scss">
.faq {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: scroll;
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
  }
  &-item {
    margin-bottom: 16px;
    background: #fff;
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
      color: #363845;
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
      color: #6a6a6a;
      font-size: 12px;
      padding-top: 5px;
      border-top: 1px solid #f6f6f6;
    }
  }
}
</style>
