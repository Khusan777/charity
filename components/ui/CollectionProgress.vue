<template>
  <div class="collection-progress">
    <div class="goal">
      <div class="title">Необходимо собрать:</div>
      <div class="price">
        {{ amount?.amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }}
        сумов
      </div>
    </div>
    <div
      style="height: 6px; background-color: var(--progress-bg)"
      class="progress"
    >
      <div
        :style="{ width: percentMuch }"
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="percentMuchNumber"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="current-money">
      <div>
        <div class="text">Собрано:</div>
        <div class="price">
          {{
            amount?.collectedAmount
              ?.toString()
              ?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          }}
          сумов
        </div>
      </div>
      <div>
        <div style="text-align: right" class="text">Осталось собрать:</div>
        <div class="price">
          {{
            amount?.remainsAmount
              ?.toString()
              ?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          }}
          сумов
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  amount: {
    type: Object,
    required: true,
  },
})

const percentMuchNumber = computed(
  () =>
    Math.round((props.amount?.collectedAmount * 100) / props.amount?.amount) ||
    0,
)
const percentMuch = computed(
  () =>
    Math.round((props.amount?.collectedAmount * 100) / props.amount?.amount) +
    '%',
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
      color: var(--goal-title);
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0;
      text-align: left;
    }
    & .price {
      color: var(--goal-price);
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
      color: var(--collected-text);
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0;
    }
    & .price {
      color: var(--collected-summa);
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0;
      text-align: left;
    }
  }
}
</style>
