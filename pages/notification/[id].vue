<template>
  <div>
    <UiHeaderComponent
      center
      center-text="Уведомления"
      left-route="/notification"
    ></UiHeaderComponent>
    <div class="notification-detail">
      <div class="notification-detail-wrapper">
        <div class="notification-detail-date">03 февр. 16.05</div>
        <div class="notification-detail-title">Поможем вместе пострадавшим от взрыва на Сергели!</div>
        <div class="notification-detail-des">
          <p>В результата происшествия пострадало множество людей и сейчас им необходима наша с вами помощь!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas nihil fugiat aspernatur explicabo maiores tenetur aliquid minus praesentium! Rem itaque ipsum eum molestias facilis provident nobis porro a non.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const heightDevice = inject('devicePlatform')
</script>

<style lang="scss" scoped>
  .notification-detail{
    max-height: v-bind(heightDevice);
    height: v-bind(heightDevice);
    overflow-y: scroll;
    &-wrapper{
      padding: 0 20px;
    }
    &-date{
      color: #6A6A6A;
      font-size: 10px;
      margin-bottom: 5px;
    }
    &-title{
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
    }
    &-des{
      p{
        font-size: 12px;
        color: #6A6A6A;
        line-height: 14px;
        margin-bottom: 10px;
      }
    }
  }
</style>