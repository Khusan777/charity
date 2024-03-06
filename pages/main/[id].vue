<template>
  <div>
    <UiHeaderComponent
      center
      center-text="Сенбаев Арслан"
      left-route="/main"
    ></UiHeaderComponent>
    <div class="detail-container">
      <div class="badge-ui">
        <UiBadge
          status-text="ID 4654654"
          background-color="#f6f6f6"
          color="#6a6a6a"
        ></UiBadge>
      </div>
      <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
      <div class="city">Город Фергана</div>
      <div class="charity-swiper">
        <Swiper
          :centered-slides="true"
          :slides-per-view="'auto'"
          :pagination="{
            clickable: true,
          }"
          :slide-to-clicked-slide="true"
          :modules="[Pagination]"
        >
          <SwiperSlide class="main-help-slide">
            <NuxtImg src="/images/user.png" class="help-images"></NuxtImg>
          </SwiperSlide>
          <SwiperSlide class="main-help-slide">
            <NuxtImg src="/images/user.png" class="help-images"></NuxtImg>
          </SwiperSlide>
          <SwiperSlide class="main-help-slide">
            <NuxtImg src="/images/user.png" class="help-images"></NuxtImg>
          </SwiperSlide>
          <SwiperSlide class="main-help-slide">
            <NuxtImg src="/images/user.png" class="help-images"></NuxtImg>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.detail-container {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: scroll;
  & .badge-ui {
    padding: 0 20px;
  }
  & .name {
    padding: 4px 20px 0;
    font-weight: 500;
    font-size: 18px;
    color: #363845;
    & span {
      color: #2c2d35;
    }
  }
  & .city {
    padding: 0 20px 13px;
    font-weight: 400;
    font-size: 10px;
    color: #6a6a6a;
  }
  & .charity-swiper {
    width: 100%;
    max-width: 100%;
    padding: 0 0 20px;
    & .main-help-slide {
      padding-right: 10px;
      max-width: 90%;
      width: 90%;
    }
    & .help-images {
      background-size: cover;
      border-radius: 16px;
      width: 100%;
      height: 216px;
    }
  }
}
</style>
