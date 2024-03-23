<template>
  <div class="reports">
    <div class="title">Отчёты по переводам</div>
    <div class="all-transactions">
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
      <div class="data">
        <div class="info">
          <NuxtImg
            width="12"
            height="12"
            src="/images/check.svg"
            alt="check"
          ></NuxtImg>
          <div class="date">20.02.2024</div>
          <div class="time">10:00</div>
        </div>
        <div class="summa">25 000 cумов</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reports {
  margin: 10px 20px 8px;
  & .all-transactions {
    padding-top: 8px;
    display: flex;
    gap: 8px;
    flex: 1 1 0;
    flex-wrap: wrap;
  }
  & .title {
    font-weight: 600;
    font-size: 16px;
    color: var(--report-transction-title);
  }
  & .data {
    width: 48%;
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
