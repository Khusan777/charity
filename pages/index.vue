<template>
  <div class="start-container">
    <div>
      <NuxtImg
        class="start-image"
        src="/images/background.png"
        alt="background"
      ></NuxtImg>
    </div>
    <div class="main-content">
      <div>
        <div class="title">Добро пожаловать!</div>
        <div class="description">
          Мы соединяем тех, кто может помочь, с теми, кому нужна помощь. Мы
          создаем простой способ участия в благотворительности для пользователей
          Click и возможность регулярно получать помощь для некоммерческих
          организаций.
        </div>
      </div>
      <div>
        <UiCheckbox
          v-model:checked="acceptCheck"
          label="Соглашаюсь с политикой<br />обработки <span style='text-decoration:underline; color:#0073ff'>персональных данных</span>"
        ></UiCheckbox>
        <UiButton
          v-if="!acceptCheck"
          :with-disabled="true"
          text-btn="Готово"
        ></UiButton>
        <UiButton
          v-else
          :with-disabled="false"
          text-btn="Готово"
          @click="goToMainPage"
        ></UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const acceptCheck = ref(false)

const goToMainPage = () => {
  router.push('/main')
}
</script>

<style lang="scss" scoped>
.start-container {
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  & .main-content {
    max-height: calc(100vh - 320px);
    height: calc(100vh - 320px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
  }
  & .start-image {
    margin-top: 20px;
    width: 100%;
    height: 250px;
    background-size: cover;
  }
  & .title {
    text-align: left;
    padding-top: 16px;
    font-weight: 700;
    font-size: 24px;
    color: #363845;
  }
  & .description {
    padding-top: 16px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: #2c2d35;
  }
}
</style>
