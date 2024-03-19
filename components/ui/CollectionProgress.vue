<template>
  <div class="collection-progress">
    <div class="goal">
      <div class="title">Необходимо собрать:</div>
      <div class="price">{{ amount?.amount }} сумов</div>
    </div>
    <div style="height: 6px" class="progress">
      <div
        style="width: v-bind(percentMuch)"
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="percentMuchNumber"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="current-money">
      <div>
        <div class="text">Собрано</div>
        <div class="price">{{ muchAmount }} сумов</div>
      </div>
      <div>
        <div style="text-align: right" class="text">Осталось собрать</div>
        <div class="price">{{ amount.leftAmount }} сумов</div>
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
const props = defineProps({
  isCompleted: {
    type: String,
    required: true,
  },
  amount: {
    type: Object,
    required: true,
  },
})

const muchAmount = computed(
  () => props.amount?.amount - props.amount?.leftAmount,
)

const percentMuchNumber = computed(
  () => Math.round((muchAmount.value * 100) / props.amount?.amount) || null,
)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const percentMuch = computed(
  () => Math.round((muchAmount.value * 100) / props.amount?.amount) + '%',
)
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
