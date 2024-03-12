<template>
  <div class="collection-progress">
    <div class="goal">
      <div class="title">Необходимо собрать:</div>
      <div class="price">10 582 000 сумов</div>
    </div>
    <div style="height: 6px" class="progress">
      <div
        style="width: 50%"
        class="progress-bar"
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="current-money">
      <div>
        <div class="text">Собрано</div>
        <div class="price">10 582 000 сумов</div>
      </div>
      <div>
        <div class="text">Осталось собрать</div>
        <div class="price">11 000 000 сумов</div>
      </div>
    </div>
  </div>
  <div
    v-if="isCompleted === 'false'"
    v-ripple.500="'rgba(255, 255, 255, 0.35)'"
    class="help-btn"
  >
    <UiButton
      :with-disabled="false"
      @click="$router.push({ path: '/main/1', query: { completed: false } })"
    ></UiButton>
  </div>
</template>

<script setup>
defineProps({
  isCompleted: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.collection-progress {
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & .goal {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    & .title {
      color: rgb(106, 106, 106);
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0;
      text-align: left;
    }
    & .price {
      color: rgb(54, 56, 69);
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0;
      text-align: left;
    }
  }
  & .current-money {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    flex: 1 1 0;
    & .text {
      color: rgb(106, 106, 106);
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0;
      text-align: left;
    }
    & .price {
      color: rgb(54, 56, 69);
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0;
      text-align: left;
    }
  }
}
.help-btn {
  padding-bottom: 10px;
}
</style>
