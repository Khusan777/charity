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
          <NuxtImg
            v-if="appStore.theme === 'light'"
            src="/images/logo_light.svg"
          ></NuxtImg>
          <NuxtImg v-else src="/images/logo_dark.svg"></NuxtImg>
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
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore()
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.about {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    overflow-y: scroll;
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
