<template>
  <div class="profile">
    <UiHeaderComponent center center-text="Профиль"></UiHeaderComponent>
    <div class="profile-wrapper">
      <div class="profile-user">
        <div class="profile-user-img">
          <NuxtImg src="/images/profile.png" alt="profile"></NuxtImg>
        </div>
        <div class="profile-user-name">
          {{ appStore?.user?.name }} {{ appStore?.user?.surname }}
        </div>
        <div class="profile-user-phone">{{ appStore?.user?.phone_number }}</div>
        <div v-if="appStore?.user?.is_identified" class="profile-user-ident">
          <NuxtImg src="/images/ident.svg" alt="ident"></NuxtImg>
          <span>Вы идентифицированы</span>
        </div>
        <div v-else class="profile-user-ident">
          <NuxtImg src="/images/not-ident.svg" alt="ident"></NuxtImg>
          <span>Вы не идентифицированы</span>
        </div>
      </div>
      <div class="profile-menu">
        <router-link class="profile-menu-item" to="/profile/form">
          <div class="profile-menu-left">
            <NuxtImg src="/images/edit.svg"></NuxtImg>
            <span>Мне нужна помощь</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <router-link class="profile-menu-item" to="/main">
          <div class="profile-menu-left">
            <NuxtImg src="/images/doc.svg"></NuxtImg>
            <span>Мои заявки</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <router-link class="profile-menu-item" to="/profile/fonds">
          <div class="profile-menu-left">
            <NuxtImg src="/images/like.svg"></NuxtImg>
            <span>Все фонды</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <router-link class="profile-menu-item" to="/profile/offer">
          <div class="profile-menu-left">
            <NuxtImg src="/images/info.svg"></NuxtImg>
            <span>Пользовательское соглашение</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
      </div>
      <div class="profile-menu">
        <router-link class="profile-menu-item" to="/profile/faq">
          <div class="profile-menu-left">
            <NuxtImg src="/images/faq.svg"></NuxtImg>
            <span>Вопросы и ответы</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
        <router-link class="profile-menu-item" to="/profile/about">
          <div class="profile-menu-left">
            <NuxtImg src="/images/like2.svg"></NuxtImg>
            <span>О проекте</span>
          </div>
          <div class="profile-menu-right">
            <NuxtImg src="/images/arrow.svg"></NuxtImg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/AppStore'
definePageMeta({
  layout: 'single',
})
const heightDevice = inject('devicePlatform')
const appStore = useAppStore()
</script>

<style scoped lang="scss">
.profile {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  padding-bottom: 75px;
  overflow-y: scroll;
  &-wrapper {
    height: calc(v-bind(heightDevice) - 75px);
    max-height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
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
      span{
        color: var(--text3);
      }
    }
    &-right {
      img {
        width: 10px;
      }
    }
  }
}
</style>
