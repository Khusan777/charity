<template>
  <div class="sendform">
    <UiHeaderComponent
      center
      center-text="Анкета-обращение"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="sendform-wrapper">
      <div class="sendform-fond">
        <div class="sendform-fond-des">
          Является негосударственной некоммерческой организацией в форме
          учреждения созданного при учредительстве Союза молодежи Узбекистана
        </div>
        <div class="sendform-fond-top">
          <div class="sendform-fond-top-icon">
            <NuxtImg src="/images/fonds/01.png"></NuxtImg>
          </div>
          <div class="sendform-fond-top-text">
            <div class="sendform-fond-top-title">Mehrli qo'llar</div>
            <div class="sendform-fond-top-line"></div>
            <a
              href="tel:998712000083"
              target="_blank"
              class="sendform-fond-top-phone"
            >
              <div class="sendform-fond-top-phone-icon">
                <NuxtImg src="/images/call.svg"></NuxtImg>
              </div>
              <div class="sendform-fond-top-phone-val">+998 71 200-00-83</div>
            </a>
          </div>
        </div>
      </div>
      <div class="sendform-top">
        Если вам нужна помощь, пожалуйста, заполните и отправьте
        анкету-обращение. Рассмотрение заявки осуществляется в течение 14 дней с
        момента подачи заявки. Помощь будет оказана в клиниках партнерах.
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
            v-model="v$.surname.$model"
            placeholder="Фамилия"
            :class="v$.surname.$error ? 'error' : ''"
            @input="filterSurname"
          />
          <div v-if="v$.surname.$error" class="sendform-pac-error">
            <span v-if="v$.surname.required.$invalid">Введите фамилию</span>
            <span v-if="v$.surname.minLength.$invalid">Мин.кол-во символов: 3</span>
            <span v-if="v$.surname.maxLength.$invalid">Мин.кол-во символов: 20</span>
          </div>
        </div>
        <div class="sendform-pac-input">
          <label for="name">Имя ребенка<span>*</span></label>
          <input
            id="name"
            v-model="v$.name.$model"
            placeholder="Имя"
            :class="v$.name.$error ? 'error' : ''"
            @input="filterName"
          />
          <div v-if="v$.name.$error" class="sendform-pac-error">
            <span v-if="v$.name.required.$invalid">Введите имя</span>
            <span v-if="v$.name.minLength.$invalid">Мин.кол-во символов: 3</span>
            <span v-if="v$.name.maxLength.$invalid">Мин.кол-во символов: 20</span>
          </div>
        </div>
        <div class="sendform-pac-input">
          <label for="birthday">Дата рождения<span>*</span></label>
          <input
            v-model="v$.birthday.$model"
            v-mask="'##-##-####'"
            type="text"
            inputmode="numeric"
            placeholder="ДД-ММ-ГГГГ"
            :class="v$.birthday.$error ? 'error' : ''"
          />
          <div v-if="v$.birthday.$error" class="sendform-pac-error">
            <span v-if="v$.birthday.required.$invalid">Введите дату рождения</span>
            <span v-if="v$.birthday.minLength.$invalid">Неверный формат</span>
            <span v-if="v$.birthday.maxLength.$invalid">Неверный формат</span>
          </div>
        </div>
        <div class="sendform-pac-select">
          <label for="region">Область проживания<span>*</span></label>
          <select
            id="region"
            v-model="v$.region.$model"
            class="form-select"
            :class="v$.region.$error ? 'error' : ''"
          >
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
          <div v-if="v$.region.$error" class="sendform-pac-error">
            Выберите область проживания
          </div>
        </div>
        <div class="sendform-pac-input">
          <label for="phone">Ваш телефон<span>*</span></label>
          <div class="sendform-pac-input-box">
            <span>+998</span>
            <input
              v-model="v$.phone.$model"
              v-mask="'(##) ###-##-##'"
              type="tel"
              inputmode="numeric"
              placeholder="(00) 000-00-00"
              :class="v$.phone.$error ? 'error' : ''"
            />
          </div>
          <div v-if="v$.phone.$error" class="sendform-pac-error">
            <span v-if="v$.phone.required.$invalid">Введите телефон</span>
            <span v-if="v$.phone.minLength.$invalid">Неверный формат</span>
            <span v-if="v$.phone.maxLength.$invalid">Неверный формат</span>
          </div>
        </div>
        <div class="sendform-pac-select">
          <label for="type">Тип нуждаемости<span>*</span></label>
          <select
            id="type"
            v-model="v$.type.$model"
            class="form-select"
            :class="v$.type.$error ? 'error' : ''"
          >
            <option value="1" selected>Хирургическое лечение</option>
            <option value="2">Медикаменты</option>
          </select>
          <div v-if="v$.type.$error" class="sendform-pac-error">
            Выберите тип нуждаемости
          </div>
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
        <button :disabled="loading" @click.prevent="send">
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
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, maxLength } from '@vuelidate/validators'
import { useAppStore } from '~/stores/AppStore'
import { apiClient } from '~/services/apiClient'

export default {
  name: 'Form',
  directives: {
    mask,
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      surname: '',
      name: '',
      phone: '',
      birthday: '',
      region: '',
      des: '',
      type: '',
      heightDevice: inject('devicePlatform'),
      appStore: useAppStore(),
      loading: false,
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async send() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        this.loading = true
        const phone_number = this.phone.replace(/[- )(]/g, '')
        const result_number = '998' + phone_number
        const modal = new bootstrap.Modal('#successModal')
        const data = {
          customer_id: this.appStore.user.id,
          patient_name: this.name,
          patient_surname: this.surname,
          patient_birth_date: this.birthday,
          region_id: this.region,
          patient_phone: result_number,
          type_help_id: this.type,
          comment: this.comment,
        }
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
      }
    },
    goHome() {
      this.$router.push('/main')
    },
    filterSurname() {
      this.surname = this.surname.replace(/[^a-zа-яё\s]/gi, '')
    },
    filterName() {
      this.name = this.name.replace(/[^a-zа-яё\s]/gi, '')
    },
  },
  validations() {
    return {
      surname: { 
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      birthday: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      region: { required },
      phone: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(14)
      },
      type: { required },
    }
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
  &-fond {
    border-radius: 10px;
    background: var(--bg1);
    margin-bottom: 20px;
    padding: 10px;
    &-top {
      display: flex;
      align-items: center;
      gap: 10px;
      &-icon {
        width: 60px;
        height: 60px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 60px;
        }
      }
      &-text {
        width: calc(100% - 70px);
      }
      &-title {
        line-height: 19.2px;
        font-size: 16px;
        color: var(--text);
      }
      &-line {
        margin: 10px 0;
        background: var(--border);
        width: 100%;
        height: 1px;
      }
      &-phone {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 16px;
          }
        }
        &-val {
          font-size: 12px;
          font-weight: 500;
          line-height: 100%;
          color: var(--text);
        }
      }
    }
    &-des {
      font-size: 12px;
      line-height: 16px;
      color: var(--text2);
      margin-bottom: 10px;
    }
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
      input.error {
        border: 1px solid #fd7172;
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
      select.error {
        border: 1px solid #fd7172;
      }
    }
    &-error {
      font-size: 12px;
      color: #fd7172;
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
