<template>
  <div class="faq">
    <UiHeaderComponent
      center
      center-text="Вопросы и ответы"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="faq-wrapper">
      <div class="faq-list">
        <div class="faq-item">
          <button
            class="faq-item-top collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="false"
            aria-controls="faq1"
          >
            <div class="faq-item-title">
              Куда попадут деньги от пожертвований?
            </div>
            <div class="faq-item-icon">
              <NuxtImg src="/images/tick.svg"></NuxtImg>
            </div>
          </button>
          <div id="faq1" class="collapse faq-item-body">
            <div class="faq-item-content">
              Все денежные средства (пожертвования) через системы Payme, CLICK ,
              UZUM и боксов попадают на расчетный счет фонда, и оттуда
              распределяются по программам.
            </div>
          </div>
        </div>
        <div class="faq-item">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.faq {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: scroll;
  &-wrapper {
    height: calc(100dvh - 75px);
    max-height: calc(100dvh - 75px);
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