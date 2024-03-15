<template>
  <div class="sendform">
    <UiHeaderComponent
      center
      center-text="Анкета-обращение"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="sendform-wrapper">
      <div class="sendform-top">
        <p>
          Если вам нужна помощь, пожалуйста, заполните и отправьте
          анкету-обращение. Ваше обращение будет рассмотрено медицинскими
          специалистами и экспертами.
        </p>
        <p>
          Пожалуйста, обратите внимание, что фонд может оказывать помощь только
          пациентам с сердечно-сосудистыми заболеваниями.
        </p>
      </div>
      <div class="sendform-pac">
        <div class="sendform-pac-title">Данные пациента</div>
        <div class="sendform-pac-des">
          Для оформления Анкеты-обращения вам необходимо заполнить контактные
          данные
        </div>
        <div class="sendform-pac-input">
          <label for="fio">ФИО ребенка<span>*</span></label>
          <input id="fio" placeholder="Фамилия Имя Отчество" />
        </div>
        <div class="sendform-pac-input">
          <label for="date">Дата рождения<span>*</span></label>
          <input id="date" type="date" />
        </div>
        <div class="sendform-pac-select">
          <label for="region">Область проживания<span>*</span></label>
          <select
            id="region"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Выберите область</option>
            <option value="1">г. Ташкент</option>
            <option value="2">Ташкентская область</option>
            <option value="3">Андижанская область</option>
          </select>
        </div>
        <div class="sendform-pac-input">
          <label for="phone">Ваш телефон<span>*</span></label>
          <input id="phone" type="text" inputmode="tel" />
        </div>
        <div class="sendform-pac-select">
          <label for="type">Тип нуждаемости<span>*</span></label>
          <select id="type" class="form-select" aria-label="Выберите область">
            <option value="1" selected>Болезнь</option>
            <option value="2">Сложная ситуация</option>
            <option value="3">Помощь</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style scoped lang="scss">
.sendform {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px 20px;
    overflow-y: scroll;
  }
  &-top {
    margin-bottom: 20px;
    p {
      font-size: 12px;
      line-height: 16px;
      color: #363845;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-pac {
    background: #fff;
    padding: 20px 15px;
    border-radius: 12px;
    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 19.2px;
      color: #363845;
      margin-bottom: 4px;
    }
    &-des {
      font-size: 12px;
      line-height: 14.4px;
      color: #2c2d35;
      margin-bottom: 15px;
    }
    &-input {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        font-size: 12px;
        line-height: 16px;
        color: #6a6a6a;
        margin-bottom: 2px;
        span {
          color: #fd7172;
        }
      }
      input {
        height: 45px;
        line-height: 45px;
        border: 1px solid #d8dbf0;
        border-radius: 10px;
        padding: 0 10px;
        width: 100%;
        font-size: 14px;
        transition: 0.5s;
        &:focus {
          border-color: #0073ff;
          transition: 0.5s;
          outline: 0;
        }
      }
    }
    &-select {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        font-size: 12px;
        line-height: 16px;
        color: #6a6a6a;
        margin-bottom: 2px;
        span {
          color: #fd7172;
        }
      }
      select {
        font-size: 14px;
        height: 45px;
        border: 1px solid #d8dbf0;
      }
    }
  }
}
</style>
