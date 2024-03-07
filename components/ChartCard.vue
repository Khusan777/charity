<template>
  <div class="chart-card">
    <div class="fond-container">
      <div class="data">
        <NuxtImg class="fond-img" src="/images/fond.svg" alt="fond"></NuxtImg>
        <div>Mehrli qo'llar</div>
      </div>
      <NuxtImg class="refferal" src="/images/ref.svg" alt="ref"></NuxtImg>
    </div>
    <div class="user-disease">
      <NuxtImg class="image-user" src="/images/user.png" alt="user"></NuxtImg>
      <div>
        <UiBadge
          with-image
          img-ref="/images/badge/urgentHelp.svg"
          status-text="Нужна срочная помощь"
          background-color="rgb(255, 243, 224)"
          color="rgb(251, 140, 0)"
        ></UiBadge>
        <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
        <div class="city">Город Фергана</div>
        <UiBorderLine></UiBorderLine>
        <div class="disease">Дефект предсердно-желудочковой перегородки</div>
      </div>
    </div>
    <UiCollectionProgress is-completed="false"></UiCollectionProgress>
  </div>
  <div
    class="chart-card"
    @click="$router.push({ path: '/main/1', query: { completed: true } })"
  >
    <div class="fond-container">
      <div class="data">
        <NuxtImg class="fond-img" src="/images/fond.svg" alt="fond"></NuxtImg>
        <div>Mehrli qo'llar</div>
      </div>
      <NuxtImg class="refferal" src="/images/ref.svg" alt="ref"></NuxtImg>
    </div>
    <div class="user-disease">
      <NuxtImg class="image-user" src="/images/user.png" alt="user"></NuxtImg>
      <div>
        <UiBadge
          with-image
          img-ref="/images/badge/treatment.svg"
          status-text="На лечении"
          background-color="#EDF8E9"
          color="#66ca28"
        ></UiBadge>
        <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
        <div class="city">Город Фергана</div>
        <UiBorderLine></UiBorderLine>
        <div class="disease">Дефект предсердно-желудочковой перегородки</div>
      </div>
    </div>
    <UiCompletedProgress></UiCompletedProgress>
  </div>
</template>

<style scoped lang="scss">
.chart-card {
  overflow-y: auto;
  background: #fff;
  border-radius: 12px;
  margin: 10px 20px 8px;
  padding: 10px 10px 0 10px;
  & .fond-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    & .data {
      display: flex;
      align-items: center;
      gap: 4px;
      & .fond-img {
        width: 24px;
        height: 24px;
      }
    }
    & .refferal {
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }
  & .user-disease {
    display: flex;
    gap: 10px;
    width: 100%;
    padding-bottom: 8px;
    & .image-user {
      width: 91px;
      height: 91px;
      border-radius: 6px;
    }
    & .badge {
      width: max-content;
      display: flex;
      gap: 5px;
      justify-content: space-between;
      align-items: center;
      border-radius: 50px;
      padding: 2px 8px;
      height: 20px;
      background: #fff3e0;
      & .status {
        font-weight: 600;
        font-size: 10px;
        color: #fb8c00;
      }
      & .image {
        width: 16px;
        height: 16px;
      }
    }
    & .name {
      font-weight: 600;
      font-size: 14px;
      color: #363845;
      align-self: center;
      padding-bottom: 2px;
      & span {
        font-size: 12px;
        color: #2c2d35;
      }
    }
    & .city {
      font-weight: 400;
      font-size: 10px;
      color: #6a6a6a;
    }
    & .disease {
      font-weight: 400;
      font-size: 10px;
      color: #6a6a6a;
    }
  }
}
</style>
