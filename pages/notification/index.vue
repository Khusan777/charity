<template>
  <div class="notification">
    <UiHeaderComponent center center-text="Уведомления"></UiHeaderComponent>
    <div class="notification-list">
      <router-link to="/notification/1" class="notification-item">
        <div class="notification-icon">
          <NuxtImg
            width="24"
            height="24"
            src="/images/push.svg"
            class="notification-icon__img"
          ></NuxtImg>
        </div>
        <div class="notification-text">
          <div class="notification-date">03 февр. 16:05</div>
          <div class="notification-box">
            <div class="notification-title">
              Поможем вместе пострадавшим от взрыва на Сергели!
            </div>
            <div class="notification-more">
              <NuxtImg
                src="/images/arrow.svg"
                class="notification-more__img"
              ></NuxtImg>
            </div>
          </div>
          <div class="notification-des">
            В результата происшествия пострадало множество людей и сейчас им
            необходима наша с вами помощь!
          </div>
        </div>
      </router-link>
      <router-link to="/notification/1" class="notification-item">
        <div class="notification-icon">
          <NuxtImg
            src="/images/push.svg"
            class="notification-icon__img"
          ></NuxtImg>
        </div>
        <div class="notification-text">
          <div class="notification-date">03 февр. 16:05</div>
          <div class="notification-box">
            <div class="notification-title">
              Поможем вместе пострадавшим от взрыва на Сергели!
            </div>
            <div class="notification-more">
              <NuxtImg
                src="/images/arrow.svg"
                class="notification-more__img"
              ></NuxtImg>
            </div>
          </div>
          <div class="notification-des">
            В результата происшествия пострадало множество людей и сейчас им
            необходима наша с вами помощь!
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'single',
})
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.notification {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  padding-bottom: 75px;
  overflow-y: scroll;
  &-list {
    height: calc(100% - 75px);
    max-height: calc(100% - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &-item {
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 10px;
    color: #363845;
  }
  &-icon {
    padding: 0 3px;
    img {
      width: 18px;
    }
  }
  &-date {
    color: #6a6a6a;
    font-size: 10px;
  }
  &-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  &-title {
    font-size: 14px;
    line-height: 17px;
  }
  &-more {
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 12px;
    }
  }
  &-des {
    font-size: 12px;
    color: #6a6a6a;
    line-height: 14px;
  }
}
</style>
