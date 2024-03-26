<template>
  <div class="sendform">
    <UiHeaderComponent
      center
      center-text="Анкета-обращение"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="sendform-wrapper">
      <div class="sendform-top">
        Если вам нужна помощь, пожалуйста, заполните и отправьте
        анкету-обращение. Рассмотрение заявки осуществляется в течение 14 дней с
        момента подачи заявки. Помощь будет оказана в клиниках партнерах.
      </div>
      <div class="sendform-info">
        <div class="sendform-info-icon">
          <NuxtImg src="/images/info.svg"></NuxtImg>
        </div>
        <div class="sendform-info-text">
          Пожалуйста, обратите внимание, что фонд может оказывать помощь только
          детям с врожденным пороком сердца
        </div>
      </div>
      <div class="sendform-pac">
        <div class="sendform-pac-title">Данные пациента</div>
        <div class="sendform-pac-des">
          Для оформления Анкеты-обращения вам необходимо заполнить контактные
          данные
        </div>
        <div class="sendform-pac-input">
          <label for="fio">Фамилия ребенка<span>*</span></label>
          <input
            id="fio"
            v-model="surname"
            placeholder="Фамилия"
            @input="filterSurname"
          />
        </div>
        <div class="sendform-pac-input">
          <label for="name">Имя ребенка<span>*</span></label>
          <input
            id="name"
            v-model="name"
            placeholder="Имя"
            @input="filterName"
          />
        </div>
        <div class="sendform-pac-input">
          <label for="birthday">Дата рождения<span>*</span></label>
          <input id="birthday" v-model="birthday" type="date" />
        </div>
        <div class="sendform-pac-select">
          <label for="region">Область проживания<span>*</span></label>
          <select id="region" v-model="region" class="form-select">
            <option value="10" selected>г. Ташкент</option>
            <option value="11">Ташкентская область</option>
            <option value="1">Андижанская область</option>
            <option value="2">Бухарская область</option>
            <option value="3">Джизакская область</option>
            <option value="4">Кашкадарьинская область</option>
            <option value="5">Навоиская область</option>
            <option value="6">Наманганская область</option>
            <option value="7">Самаркандская область</option>
            <option value="8">Сурхандарьинская область</option>
            <option value="9">Сырдарьинская область</option>
            <option value="12">Ферганская область</option>
            <option value="13">Хорезмская область</option>
            <option value="14">Республика Каракалпакстан</option>
          </select>
        </div>
        <div class="sendform-pac-input">
          <label for="phone">Ваш телефон<span>*</span></label>
          <div class="sendform-pac-input-box">
            <span>+998</span>
            <input v-model="phone" v-mask="'(##) ###-##-##'" type="tel" />
          </div>
        </div>
        <div class="sendform-pac-select">
          <label for="type">Тип нуждаемости<span>*</span></label>
          <select id="type" v-model="type" class="form-select">
            <option value="1" selected>Хирургическое лечение</option>
            <option value="2">Медикаменты</option>
          </select>
        </div>
        <div class="sendform-pac-input">
          <label for="des">Кратко опишите вашу ситуацию</label>
          <textarea
            id="des"
            v-model="des"
            placeholder="Ваше сообщение"
          ></textarea>
        </div>
      </div>
      <div class="sendform-bottom">
        Направляя нам просьбу о помощи, пожалуйста, помните, что она может быть
        проверена Национальным агентством социальной защиты и внесена в
        государственную базу данных малоимущих.
      </div>
      <div class="sendform-button">
        <p>
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
          персональных данных
        </p>
        <button :disabled="loading || !disabled" @click="send">
          <span v-if="!loading">Отправить запрос</span>
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span v-if="loading" role="status">Загрузка...</span>
        </button>
      </div>
      <div
        id="successModal"
        class="modal fade success-modal"
        tabindex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="success-modal-icon">
                <NuxtImg src="/images/success.svg"></NuxtImg>
              </div>
              <div class="success-modal-title">
                Ваша заявка успешно отправлена
              </div>
              <div class="success-modal-des">
                В рабочие дни с вами свяжется сотрудник фонда для уточнения
                деталей. В течение 10 рабочих дней вы получите ответ с решением
                экспертной комиссии.
              </div>
              <button
                class="success-modal-btn"
                data-bs-dismiss="modal"
                @click="goHome"
              >
                Готово
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { apiClient } from '~/services/apiClient'
import { useAppStore } from '~/stores/AppStore'

export default {
  name: 'Form',
  directives: {
    mask,
  },
  data() {
    return {
      surname: null,
      name: null,
      phone: null,
      birthday: null,
      region: null,
      des: null,
      type: null,
      heightDevice: inject('devicePlatform'),
      appStore: useAppStore(),
      loading: false,
    }
  },
  computed: {
    disabled() {
      return (
        this.surname != null &&
        this.name != null &&
        this.phone != null &&
        this.birthday != null &&
        this.region != null &&
        this.type != null
      )
    },
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.previewImage = e.target.result
      }
      this.file = e.target.files[0]
    },
    send() {
      this.loading = true
      const data = new FormData()
      const phone_number = this.phone.replace(/[- )(]/g, '')
      const result_number = '998' + phone_number
      const modal = new bootstrap.Modal('#successModal')
      data.append('customer_id', this.appStore.user.id)
      data.append('patient_name', this.name)
      data.append('patient_surname', this.surname)
      data.append('patient_birth_date', this.birthday)
      data.append('region_id', this.region)
      data.append('patient_phone', result_number)
      data.append('type_help_id', this.type)
      data.append('comment', this.des)
      console.log(data)
      apiClient
        .post('/fee', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          this.loading = false
          modal.show()
        })
    },
    goHome() {
      this.$router.push('/')
    },
    filterSurname() {
      this.surname = this.surname.replace(/[^a-zа-яё\s]/gi, '')
    },
    filterName() {
      this.name = this.name.replace(/[^a-zа-яё\s]/gi, '')
    },
  },
}
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
    font-size: 12px;
    line-height: 16px;
    color: var(--text4);
    margin-bottom: 10px;
  }
  &-info {
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
  &-pac {
    background: var(--bg1);
    padding: 20px 15px;
    border-radius: 12px;
    margin-bottom: 20px;
    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 19.2px;
      color: var(--text);
      margin-bottom: 4px;
    }
    &-des {
      font-size: 12px;
      line-height: 14.4px;
      color: var(--text5);
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
        color: var(--text2);
        margin-bottom: 2px;
        span {
          color: #fd7172;
        }
      }
      input {
        height: 45px;
        line-height: 45px;
        border: 1px solid var(--border2);
        border-radius: 10px;
        padding: 0 10px;
        width: 100%;
        font-size: 14px;
        transition: 0.5s;
        background: none;
        color: var(--text);
        &:focus {
          border-color: #0073ff;
          transition: 0.5s;
          outline: 0;
        }
      }
      textarea {
        height: 90px;
        line-height: 20px;
        border: 1px solid var(--border2);
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
        font-size: 14px;
        transition: 0.5s;
        background: none;
        color: var(--text);
        &:focus {
          border-color: #0073ff;
          transition: 0.5s;
          outline: 0;
        }
      }
      &-box {
        display: flex;
        align-items: center;
        gap: 5px;
        span {
          font-size: 14px;
          color: var(--text);
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
        color: var(--text2);
        margin-bottom: 2px;
        span {
          color: #fd7172;
        }
      }
      select {
        font-size: 14px;
        height: 45px;
        border: 1px solid var(--border2);
        background: none;
        color: var(--text);
      }
    }
  }
  &-bottom {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 40px;
    color: var(--text4);
  }
  &-button {
    p {
      font-size: 12px;
      line-height: 14.4px;
      margin-bottom: 10px;
      color: var(--text4);
    }
    button {
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
      &:disabled {
        background: #606060;
        opacity: 0.5;
      }
    }
  }
}
.success-modal {
  .modal-dialog {
    padding: 0 10px;
    .modal-content {
      background: var(--bg2);
      .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 25px 10px 20px;
        text-align: center;
      }
    }
  }
  &-icon {
    margin-bottom: 20px;
    img {
      width: 80px;
    }
  }
  &-title {
    font-size: 16px;
    line-height: 18px;
    color: var(--text);
    margin-bottom: 8px;
    font-weight: 600;
  }
  &-des {
    font-size: 14px;
    color: var(--text4);
    line-height: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  &-btn {
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
</style>
