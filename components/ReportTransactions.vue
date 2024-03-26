<template>
  <div class="reports">
    <div class="title">Отчёты по переводам</div>
    <div class="all-transactions">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        style="width: 48%"
      >
        <div class="data">
          <div class="info">
            <NuxtImg
              width="12"
              height="12"
              src="/images/check.svg"
              alt="check"
            ></NuxtImg>
            <div class="date">{{ formatDate(transaction?.created_at) }}</div>
            <div class="time">
              {{ formatTime(transaction?.created_at) }}
            </div>
          </div>
          <div class="summa">
            {{ transaction?.transaction_amount?.toLocaleString() }} cумов
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transactions: {
    type: Array,
    required: true,
  },
})

const formatDate = (date) => {
  const parsedDate = useDateFormat(date, 'DD.MM.YYYY')
  return parsedDate.value?.replace(/['"]+/g, '')
}
const formatTime = (date) => {
  const parsedTime = useDateFormat(date, 'HH:mm')
  return parsedTime.value?.replace(/['"]+/g, '')
}
</script>

<style scoped lang="scss">
.reports {
  margin: 10px 20px 8px;
  & .all-transactions {
    width: 100%;
    padding-top: 8px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  & .title {
    font-weight: 600;
    font-size: 16px;
    color: var(--report-transction-title);
  }
  & .data {
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    background: var(--report-transaction-card);
    border-radius: 12px;
    & .info {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    & .date {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: var(--report-transaction-date);
    }
    & .time {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: var(--report-transaction-date);
    }
  }
  & .summa {
    font-weight: 700;
    line-height: normal;
    font-size: 14px;
    color: var(--report-transaction-summ);
  }
}
</style>
