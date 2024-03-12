<template>
    <div class="fonds">
      <UiHeaderComponent
        center
        center-text="Все фонды"
        left-route="/profile"
      ></UiHeaderComponent>
      <div class="fonds-wrapper">
        <router-link class="fonds-item" to="/main">
            <div class="fonds-item-left">
                <div class="fonds-item-img">
                    <NuxtImg src="/images/fonds/01.png"></NuxtImg>
                </div>
                <div class="fonds-item-text">
                    <div class="fonds-item-title">Mehrli qo'llar</div>
                    <div class="fonds-item-des">город Ташкент</div>
                </div>
            </div>
            <div class="fonds-item-right">
                <NuxtImg src="/images/arrow.svg"></NuxtImg>
            </div>
        </router-link>
        <router-link class="fonds-item" to="/main">
            <div class="fonds-item-left">
                <div class="fonds-item-img">
                    <NuxtImg src="/images/fonds/02.png"></NuxtImg>
                </div>
                <div class="fonds-item-text">
                    <div class="fonds-item-title">Доброе сердце</div>
                    <div class="fonds-item-des">город Самарканд</div>
                </div>
            </div>
            <div class="fonds-item-right">
                <NuxtImg src="/images/arrow.svg"></NuxtImg>
            </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  const heightDevice = inject('devicePlatform')
  </script>
  
  <style scoped lang="scss">
  .fonds {
    max-height: v-bind(heightDevice);
    height: v-bind(heightDevice);
    overflow-y: scroll;
    &-wrapper {
      height: calc(100% - 75px);
      max-height: calc(100% - 75px);
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    &-item{
        background: #fff;
        border-radius: 10px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px 10px 10px;
        &-left{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &-img{
            img{
                width: 40px;
            }
        }
        &-title{
            color: #363845;
            font-size: 14px;
            margin-bottom: 2px;
            line-height: 16px;
        }
        &-des{
            color: #6A6A6A;
            font-size: 12px;
            line-height: 100%;
            line-height: 14px;
        }
        &-right{
            display: flex;
            align-items: flex-start;
            padding-top: 5px;
            img{
                width: 10px;
            }
        }
    }
  }
  </style>
  