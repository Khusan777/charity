<template>
  <div class="requests">
    <UiHeaderComponent
      center
      :center-text="$t('requests.title')"
      left-route="/profile"
    ></UiHeaderComponent>
    <div class="requests-wrapper">
      <div v-if="loading" class="loading">
        <RequestsSkeleton></RequestsSkeleton>
      </div>
      <div v-else class="not-loading">
        <div v-if="getMyFees?.length > 0" class="requests-box">
          <div class="requests-top">
            <div class="requests-top-icon">
              <NuxtImg src="/images/info.svg"></NuxtImg>
            </div>
            <div class="requests-top-text">{{ $t('requests.des') }}</div>
          </div>
          <div class="requests-list">
            <div v-for="fee in getMyFees" :key="fee?.id" class="requests-item">
              <div class="requests-item-top">
                <div class="requests-item-box">
                  <div class="requests-item-top-left">
                    <div class="requests-item-top-left-date">
                      {{ formatMonthDateTime(fee?.created_at) }}
                    </div>
                    <div class="requests-item-top-left-title">
                      {{ $t('requests.num') }}: <span>{{ fee?.id }}</span>
                    </div>
                  </div>
                  <div class="requests-item-top-right">
                    <div
                      v-if="fee?.status_id == 2"
                      class="requests-item-top-right-status pending"
                    >
                      {{ $t('requests.status1') }}
                    </div>
                    <div
                      v-if="fee?.status_id != 2 && fee?.status_id != 9"
                      class="requests-item-top-right-status success"
                    >
                      {{ $t('requests.status2') }}
                    </div>
                    <div
                      v-if="fee?.status_id == 9"
                      class="requests-item-top-right-status error"
                    >
                      {{ $t('requests.status3') }}
                    </div>
                  </div>
                </div>
                <div v-if="fee?.status_id == 9" class="requests-item-top-error">
                  {{ $t('requests.status_des') }}
                </div>
              </div>
              <div class="requests-item-body">
                <div class="requests-item-body-item">
                  <div class="requests-item-body-label">
                    {{ $t('requests.fio') }}
                  </div>
                  <div class="requests-item-body-val">
                    {{ fee?.patient_surname }} {{ fee?.patient_name }}
                  </div>
                </div>
                <div class="requests-item-body-item">
                  <div class="requests-item-body-label">
                    {{ $t('requests.date') }}
                  </div>
                  <div class="requests-item-body-val">
                    {{ formatMonthNumber(fee?.patient_birth_date) }}
                  </div>
                </div>
                <div class="requests-item-body-item">
                  <div class="requests-item-body-label">
                    {{ $t('requests.region') }}
                  </div>
                  <div class="requests-item-body-val">
                    {{
                      $i18n.locale === 'uz'
                        ? fee?.region?.name_uz
                        : $i18n.locale === 'en'
                          ? fee?.region?.name_en
                          : fee?.region?.name_ru
                    }}
                  </div>
                </div>
                <div class="requests-item-body-item">
                  <div class="requests-item-body-label">
                    {{ $t('requests.phone') }}
                  </div>
                  <div class="requests-item-body-val">
                    {{ fee?.patient_phone }}
                  </div>
                </div>
                <div class="requests-item-body-item">
                  <div class="requests-item-body-label">
                    {{ $t('requests.type') }}
                  </div>
                  <div class="requests-item-body-val">
                    {{
                      $i18n.locale === 'uz'
                        ? fee?.type_help?.name_uz
                        : $i18n.locale === 'en'
                          ? fee?.type_help?.name_en
                          : fee?.type_help?.name_ru
                    }}
                  </div>
                </div>
              </div>
              <button
                v-if="fee?.status_id == 3"
                class="requests-item-more"
                @click="goMore(fee?.id)"
              >
                {{ $t('requests.more') }}
              </button>
              <button
                v-if="fee?.status_id == 4 || fee?.status_id == 5"
                class="requests-item-more"
                @click="goMore2(fee?.id)"
              >
                {{ $t('requests.more') }}
              </button>
            </div>
          </div>
        </div>
        <div v-else class="requests-not">
          <div class="requests-not-top"></div>
          <div class="requests-not-content">
            <NuxtImg
              v-if="appStore.theme === 'light'"
              src="/images/myfees-not-light.png"
            ></NuxtImg>
            <NuxtImg v-else src="/images/myfees-not.png"></NuxtImg>
            <p>{{ $t('requests.bottom') }}</p>
          </div>
          <router-link
            v-if="appStore?.user?.is_identified"
            to="/profile/form"
            class="requests-not-create"
            >{{ $t('profile.menu1') }}</router-link
          >
          <button v-else class="requests-not-create" @click="goModal">
            {{ $t('profile.menu1') }}
          </button>
        </div>
      </div>
      <div
        id="identModal"
        class="modal fade ident-modal"
        tabindex="-1"
        aria-labelledby="identModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="ident-modal-des">{{ $t('profile.ident_title') }}</div>
              <a
                href="https://my.click.uz/app/identification"
                class="ident-modal-btn"
                >{{ $t('profile.ident_start') }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '~/stores/AppStore'
import RequestsSkeleton from '~/components/skeleton/RequestsSkeleton.vue'

export default {
  name: 'Faq',
  components: {
    RequestsSkeleton,
  },
  data() {
    return {
      apiClient: useAllServices(),
      heightDevice: inject('devicePlatform'),
      appStore: useAppStore(),
      status: 1,
      loading: true,
    }
  },
  computed: {
    getMyFees() {
      return this.appStore?.myFees
    },
  },
  created() {
    this.fetchMyFees()
  },
  methods: {
    goMore(id) {
      this.$router.push({ path: `/main/${id}`, query: { completed: false } })
    },
    goMore2(id) {
      this.$router.push({ path: `/main/${id}`, query: { completed: true } })
    },
    fetchMyFees() {
      this.apiClient.$apiClient.get('/myFees').then((res) => {
        this.appStore.myFees = res.data.data
        this.loading = false
      })
    },
    goModal() {
      const modal = new bootstrap.Modal('#identModal')
      modal.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.requests {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px 20px;
    overflow-y: scroll;
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
    padding-bottom: 20px;
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
  &-not {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    &-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 25px;
      img {
        width: 80%;
      }
      p {
        font-size: 14px;
        line-height: 16.8px;
        color: var(--text2);
      }
    }
    &-create {
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.loading {
  margin: 0 -20px;
}
.not-loading {
  height: 100%;
}
.ident-modal {
  &-des {
    font-size: 14px;
    line-height: 18px;
    color: var(--text);
    margin-bottom: 15px;
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
  .modal-dialog {
    padding: 0 10px;
    .modal-content {
      background: var(--bg2);
      .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 25px 20px 20px;
        text-align: center;
      }
    }
  }
}
</style>
