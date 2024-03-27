<template>
  <div class="requests">
    <UiHeaderComponent
      center
      center-text="Мои заявки"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="requests-wrapper">
      <div class="requests-top">
        <div class="requests-top-icon">
          <NuxtImg src="/images/info.svg"></NuxtImg>
        </div>
        <div class="requests-top-text">
          После отправки Заявления и получения полного пакета документов, в
          рабочие дни с вами может связаться сотрудник фонда для уточнения
          деталей, и в течение 10 рабочих дней вам придет ответ с решением
          экспертной комиссии.
        </div>
      </div>
      <div class="requests-list">
        <div class="requests-item">
          <div class="requests-item-top">
            <div class="requests-item-box">
              <div class="requests-item-top-left">
                <div class="requests-item-top-left-date">
                  10:35 03 февр. 16.05
                </div>
                <div class="requests-item-top-left-title">
                  Номер заявки: <span>3456789</span>
                </div>
              </div>
              <div class="requests-item-top-right">
                <div
                  v-if="status == 0"
                  class="requests-item-top-right-status pending"
                >
                  Заявка на рассмотрении
                </div>
                <div
                  v-if="status == 1"
                  class="requests-item-top-right-status success"
                >
                  Заявка одобрена
                </div>
                <div
                  v-if="status == 2"
                  class="requests-item-top-right-status error"
                >
                  Заявка отлонена
                </div>
              </div>
            </div>
            <div v-if="status == 2" class="requests-item-top-error">
              К сожалению, мы не можем принять к рассмотрению вашу заявку, так
              как приоритетное направление работы фонда «Mehrli qo'llar» помощь
              детям, нуждающимся в операции на сердце.
            </div>
          </div>
          <div class="requests-item-body">
            <div class="requests-item-body-item">
              <div class="requests-item-body-label">ФИО ребенка</div>
              <div class="requests-item-body-val">Сенбаев Арслан</div>
            </div>
            <div class="requests-item-body-item">
              <div class="requests-item-body-label">Дата рождения</div>
              <div class="requests-item-body-val">20.03.2018</div>
            </div>
            <div class="requests-item-body-item">
              <div class="requests-item-body-label">Область проживания</div>
              <div class="requests-item-body-val">Ташкент</div>
            </div>
            <div class="requests-item-body-item">
              <div class="requests-item-body-label">Номер телефона</div>
              <div class="requests-item-body-val">+998 (99) 123 45 67</div>
            </div>
            <div class="requests-item-body-item">
              <div class="requests-item-body-label">Тип нуждаемости</div>
              <div class="requests-item-body-val">Хирургическое лечение</div>
            </div>
          </div>
          <button
            v-if="status == 1"
            class="requests-item-more"
            @click="$router.push({ path: `/main/81` })"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      heightDevice: inject('devicePlatform'),
      status: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.requests {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  overflow-y: scroll;
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
  }
  &-top {
    border-radius: 12px;
    background: var(--bg1);
    padding: 15px 10px;
    margin-bottom: 20px;
    display: flex;
    gap: 5px;
    &-icon {
      img {
        width: 24px;
      }
    }
    &-text {
      font-size: 12px;
      line-height: 16px;
      color: var(--text);
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &-item {
    background: var(--bg3);
    padding: 10px;
    border-radius: 10px;
    &-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    &-top {
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border);
      &-left {
        &-date {
          font-size: 10px;
          line-height: 20px;
          color: var(--text2);
        }
        &-title {
          font-size: 12px;
          line-height: 16.8px;
          color: var(--text);
          font-weight: 500;
          span {
            font-size: 14px;
          }
        }
      }
      &-right {
        &-status {
          height: 24px;
          line-height: 24px;
          border-radius: 50px;
          background: #ccc;
          padding: 0 8px;
          font-size: 10px;
          width: max-content;
          font-weight: 600;
        }
        &-status.pending {
          background: #fff3e0;
          color: #fca523;
        }
        &-status.success {
          background: #f1f8e9;
          color: #66ca28;
        }
        &-status.error {
          background: #fbe9e7;
          color: #fd7172;
        }
      }
      &-error {
        font-size: 12px;
        color: #fca523;
        line-height: 14px;
        margin-top: 10px;
      }
    }
    &-body {
      padding: 10px 0 0;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      &-item {
        width: calc(50% - 8px);
      }
      &-label {
        font-size: 12px;
        line-height: 14.4px;
        color: var(--text2);
      }
      &-val {
        color: var(--text);
        font-size: 14px;
        line-height: 16.8px;
      }
    }
    &-more {
      margin-top: 20px;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgb(0, 115, 255) -1.25%,
        rgb(0, 194, 255) 100%
      );
      border-radius: 10px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      border: 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
