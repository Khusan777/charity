<template>
  <div class="collection-progress">
    <div class="completed">
      <NuxtImg class="icon" src="/images/check.svg"></NuxtImg>
      <div class="text">Сбор завершён</div>
    </div>
    <div style="height: 6px" class="progress">
      <div
        style="width: 100%"
        class="progress-bar"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="completed-summa">
      <div class="summa">
        Сумма собрана:
        <span
          >{{
            amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          }}
          сумов</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  amount: {
    type: Number,
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
  & .completed {
    display: flex;
    align-items: center;
    gap: 5px;
    & .icon {
      width: 18px;
      height: 18px;
    }
    & .text {
      font-weight: 400;
      font-size: 10px;
      color: var(--collected);
    }
  }
  & .completed-summa {
    display: flex;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 7px;
    & .summa {
      font-weight: 400;
      line-height: 12px;
      font-size: 10px;
      color: var(--collected-completed);
    }
    & span {
      font-weight: 700;
      font-size: 14px;
      color: var(--summa-span);
    }
  }
}
</style>
