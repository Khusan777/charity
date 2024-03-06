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
          <div class="text">Осталось</div>
          <div class="price">11 000 000 сумов</div>
        </div>
      </div>
    </div>
    <div v-ripple.500="'rgba(255, 255, 255, 0.35)'" class="help-btn">
      <UiButton
        :with-disabled="false"
        @click="$router.push('/main/1')"
      ></UiButton>
    </div>
  </div>
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
    <div class="collection-progress">
      <div v-if="false" class="goal">
        <div class="title">Необходимо собрать:</div>
        <div class="price">10 582 000 сумов</div>
      </div>
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
      <div v-if="false" class="current-money">
        <div>
          <div class="text">Собрано</div>
          <div class="price">10 582 000 сумов</div>
        </div>
        <div>
          <div class="text">Осталось</div>
          <div class="price">11 000 000 сумов</div>
        </div>
      </div>
      <div class="completed-summa">
        <div class="summa">Сумма собрана: <span>25 000 000 сумов</span></div>
      </div>
    </div>
    <div v-if="false" class="help-btn">
      <UiButton></UiButton>
    </div>
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
  & .collection-progress {
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
        color: #363845;
      }
    }
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
  & .completed-summa {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    & .summa {
      font-weight: 400;
      line-height: 12px;
      font-size: 10px;
      color: #6a6a6a;
    }
    & span {
      font-weight: 700;
      font-size: 14px;
      color: #363845;
    }
  }
  & .help-btn {
    padding-bottom: 10px;
  }
}
</style>
