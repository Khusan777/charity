<template>
  <div class="error-container">
    <div class="data">
      <NuxtImg class="error-img" src="/images/error.png" alt="error"></NuxtImg>
      <div class="title">Упс что-то пошло не так</div>
      <div class="description">
        Произошла техническая ошибка. Попробуйте ещё раз.
      </div>
    </div>
    <div style="padding: 20px 0; width: 100%">
      <UiButton
        class="btn"
        text-btn="Повторить попытку"
        :with-disabled="false"
        @click="$router.push('/')"
      ></UiButton>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.error-container {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow: hidden;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & .data {
    margin: auto;
    & .error-img {
      margin-left: 30px;
      width: calc(100% - 40px);
      text-align: center;
    }
  }
  & .title {
    padding-top: 60px;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: var(--error-title);
  }
  & .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 135%;
    text-align: center;
    color: var(--error-description);
  }
}
</style>
