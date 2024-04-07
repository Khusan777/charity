<template>
  <div class="profile">
    <UiHeaderComponent
      center
      :center-text="$t('profile.title')"
    ></UiHeaderComponent>
    <div class="profile-wrapper">
      <div class="profile-user">
        <div class="profile-user-img">
          <NuxtImg src="/images/profile.png" alt="profile"></NuxtImg>
        </div>
        <div class="profile-user-name">
          {{ appStore?.user?.name }}
        </div>
        <div class="profile-user-phone">{{ appStore?.user?.phone_number }}</div>
        <div v-if="appStore?.user?.is_identified" class="profile-user-ident">
          <NuxtImg src="/images/ident.svg" alt="ident"></NuxtImg>
          <span>{{ $t('profile.ident') }}</span>
        </div>
        <div v-else class="profile-user-ident">
          <NuxtImg src="/images/not-ident.svg" alt="ident"></NuxtImg>
          <span>{{ $t('profile.no-ident') }}</span>
        </div>
      </div>
      <div class="profile-menu">
        <router-link
          v-if="appStore?.user?.is_identified"
          class="profile-menu-item"
          to="/profile/form"
        >
          <div class="profile-menu-left">
            <NuxtImg src="/images/edit.svg"></NuxtImg>
            <span>{{ $t('profile.menu1') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <div v-else class="profile-menu-item" @click="goModal">
          <div class="profile-menu-left">
            <NuxtImg src="/images/edit.svg"></NuxtImg>
            <span>{{ $t('profile.menu1') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </div>
        <router-link class="profile-menu-item" to="/profile/requests">
          <div class="profile-menu-left">
            <NuxtImg src="/images/doc.svg"></NuxtImg>
            <span>{{ $t('profile.menu2') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <router-link class="profile-menu-item" to="/profile/fonds">
          <div class="profile-menu-left">
            <NuxtImg src="/images/like.svg"></NuxtImg>
            <span>{{ $t('profile.menu3') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
      </div>
      <div class="profile-menu profile-menu2">
        <router-link class="profile-menu-item" to="/profile/faq">
          <div class="profile-menu-left">
            <NuxtImg src="/images/faq.svg"></NuxtImg>
            <span>{{ $t('profile.menu5') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
      </div>
      <div class="profile-menu">
        <router-link class="profile-menu-item" to="/profile/about">
          <div class="profile-menu-left">
            <NuxtImg src="/images/like2.svg"></NuxtImg>
            <span>{{ $t('profile.menu6') }}</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
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

<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/AppStore'
import { getMe } from '~/services/app.api'
import { setToken } from '~/utils'

definePageMeta({
  layout: 'single',
})
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
const goModal = () => {
  const modal = new bootstrap.Modal('#identModal')
  modal.show()
}
const { user, webSession } = storeToRefs(appStore)

const cookieWebSession = computed(() =>
  getCookie('click-web-session')
    ? getCookie('click-web-session')
    : getCookie('web-session'),
)

const getUserData = () => {
  getMe({
    web_session: webSession.value ? webSession.value : cookieWebSession.value,
  }).then((response) => {
    if (response.data?.user) {
      user.value = response.data?.user
      setToken(response.data?.token)
    }
  })
}
if (user.value === null || !Object.keys(user.value)?.length) {
  getUserData()
}
</script>

<style scoped lang="scss">
.profile {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  padding-bottom: 75px;
  &-wrapper {
    height: calc(100% - 75px);
    max-height: calc(100% - 75px);
    padding: 0 20px 20px;
    overflow-y: scroll;
  }
  &-user {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    &-img {
      margin-bottom: 10px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 2px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg1);
      img {
        width: 57px;
      }
    }
    &-name {
      color: var(--text);
      font-size: 20px;
      font-weight: 600;
      line-height: 100%;
    }
    &-phone {
      color: var(--text2);
      font-size: 14px;
      margin-bottom: 5px;
    }
    &-ident {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 0 10px;
      border-radius: 100px;
      background: var(--bg1);
      color: var(--text2);
      font-size: 12px;
      img {
        width: 18px;
      }
    }
  }
  &-menu {
    background: var(--bg1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    &-item {
      display: flex;
      border-bottom: 1px solid var(--border2);
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 0 12px;
      &:last-child {
        border-bottom: 0;
      }
    }
    &-left {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #6a6a6a;
      font-size: 14px;
      img {
        width: 24px;
      }
      span {
        color: var(--text3);
      }
    }
    &-right {
      img {
        width: 10px;
      }
    }
  }
  &-menu2 {
    margin-bottom: 5px;
  }
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
