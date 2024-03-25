<template>
  <div class="about">
    <UiHeaderComponent
      center
      center-text="О проекте"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="about-wrapper">
      <div class="about-info">
        <div class="about-logo">
          <NuxtImg src="/images/logo.svg" v-if="$colorMode.preference == 'light'"></NuxtImg>
          <NuxtImg src="/images/logo-dark.svg" v-if="$colorMode.preference == 'dark'"></NuxtImg>
        </div>
        <div class="about-text">
          <p>
            Мы соединяем тех, кто может помочь, с теми, кому нужна помощь. Мы
            создаем простой способ участия в благотворительности для
            пользователей Click и возможность регулярно получать помощь для
            некоммерческих организаций.
          </p>
          <p>
            Фонд «Inson Uchun» был создан в 2005-м году по инициативе
            еженедельной газеты «Аргументы и факты». За эти годы больше 10 тысяч
            подопечных со сложными диагнозами получили помощь с оплатой
            операций, лекарств и медоборудования. Мы помогаем тяжелобольным
            детям и взрослым из разных регионов Узбекистана, а также развиваем
            проекты по всесторонней поддержке подопечных семей — чтобы никто не
            оставался наедине с болезнью.
          </p>
        </div>
      </div>
      <div class="about-soc">
        <a href="https://t.me/click_uz" target="_blank" class="about-soc-item"
          ><NuxtImg src="/images/telegram.svg"></NuxtImg
        ></a>
        <a
          href="https://www.instagram.com/clickuz/"
          target="_blank"
          class="about-soc-item"
          ><NuxtImg src="/images/instagram.svg"></NuxtImg
        ></a>
        <a
          href="https://www.youtube.com/channel/UCC9YNXA4HSbk34fhXpFMyLw"
          target="_blank"
          class="about-soc-item"
          ><NuxtImg src="/images/youtube.svg"></NuxtImg
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.about {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: scroll;
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
  &-soc {
    padding-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    &-item {
      width: 40px;
      height: 40px;
      background: var(--bg3);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  &-logo {
    margin-bottom: 20px;
    img {
      height: 50px;
      max-width: 100%;
    }
  }
  &-text {
    p {
      margin-bottom: 20px;
      line-height: 16px;
      font-size: 12px;
      color: var(--text5);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
