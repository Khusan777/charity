<template>
  <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
  <div v-if="withCity" class="city">Город Фергана</div>
  <div class="charity-swiper">
    <FancyBoxWrapper
      :options="{
        Carousel: {
          infinite: false,
        },
      }"
    >
      <Swiper
        :space-between="10"
        :centered-slides="true"
        :slides-per-view="'auto'"
        :pagination="{
          clickable: true,
        }"
        :modules="[Pagination]"
      >
        <SwiperSlide class="main-help-slide">
          <NuxtImg
            data-fancybox="gallery"
            href="/images/user.png"
            src="/images/user.png"
            class="help-images"
          ></NuxtImg>
        </SwiperSlide>
        <SwiperSlide class="main-help-slide">
          <NuxtImg
            data-fancybox="gallery"
            href="/images/user.png"
            src="/images/user.png"
            class="help-images"
          ></NuxtImg>
        </SwiperSlide>
        <SwiperSlide class="main-help-slide">
          <NuxtImg
            data-fancybox="gallery"
            href="/images/user.png"
            src="/images/user.png"
            class="help-images"
          ></NuxtImg>
        </SwiperSlide>
        <SwiperSlide class="main-help-slide">
          <NuxtImg
            data-fancybox="gallery"
            href="/images/user.png"
            src="/images/user.png"
            class="help-images"
          ></NuxtImg>
        </SwiperSlide>
      </Swiper>
    </FancyBoxWrapper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

defineProps({
  withCity: {
    type: Boolean,
  },
})
</script>

<style scoped lang="scss">
.name {
  padding: 4px 20px 0;
  font-weight: 500;
  font-size: 18px;
  color: #363845;
  & span {
    color: #2c2d35;
  }
}
.city {
  padding: 0 20px 13px;
  font-weight: 400;
  font-size: 10px;
  color: #6a6a6a;
}
.charity-swiper {
  width: 100%;
  max-width: 100%;
  padding: 0 0 20px;
  & .main-help-slide {
    max-width: 90%;
    width: 90%;
  }
  & .help-images {
    background-size: cover;
    border-radius: 16px;
    width: 100%;
  }
}
</style>
