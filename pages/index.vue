<template>
  <div class="start-container">
    <NuxtImg
      format="webp"
      style="padding: 0"
      class="start-image"
      src="/images/background.png"
      alt="background"
    ></NuxtImg>
    <div>
      <div class="title">Добро пожаловать!</div>
      <div class="description">
        Мы соединяем тех, кто может помочь, с теми, кому нужна помощь. Мы
        создаем простой способ участия в благотворительности для пользователей
        Click и возможность регулярно получать помощь для некоммерческих
        организаций.
      </div>
    </div>
    <div style="padding: 0 20px 20px">
      <UiCheckbox
        v-model:checked="acceptCheck"
        label="Соглашаюсь с политикой<br />обработки <span style='text-decoration:underline; color:#0073ff'>персональных данных</span>"
      ></UiCheckbox>
      <UiButton
        v-if="!acceptCheck"
        class="btn-accept"
        :with-disabled="true"
        text-btn="Готово"
      ></UiButton>
      <UiButton
        v-else
        class="btn-accept"
        :with-disabled="false"
        text-btn="Готово"
        @click="goToMainPage"
      ></UiButton>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const acceptCheck = ref(false)
const heightDevice = inject('devicePlatform')

const goToMainPage = () => {
  router.push('/main')
}
</script>

<style lang="scss" scoped>
.start-container {
  height: v-bind(heightDevice);
  max-height: v-bind(heightDevice);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  & .start-image {
    width: 100%;
    max-height: 365px;
    background-size: cover;
  }
  & .title {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: #363845;
  }
  & .description {
    padding: 16px 20px 0;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: #2c2d35;
  }
}

@media (max-width: 320px) {
  .start-container {
    & .start-image {
      height: 280px;
    }
  }
}
</style>
