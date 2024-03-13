<template>
    <div class="fonds">
      <UiHeaderComponent
        center
        center-text="Все фонды"
        left-route="/profile"
      ></UiHeaderComponent>
      <div class="fonds-wrapper">
        <div class="fonds-item">
          <div class="fonds-item-top">
              <div class="fonds-item-icon">
                  <NuxtImg src="/images/fonds/01.png"></NuxtImg>
              </div>
              <div class="fonds-item-text">
                  <div class="fonds-item-title">Mehrli qo'llar</div>
                  <div class="fonds-item-city">Ташкент</div>
                  <div class="fonds-item-hr"></div>
                  <a href="tel:998712000083" target="_blank" class="fonds-item-phone">
                      <div class="fonds-item-phone-icon">
                          <NuxtImg src="/images/call.svg"></NuxtImg>
                      </div>
                      <div class="fonds-item-phone-val">+998 71 200-00-83</div>
                  </a>
                  <a href="https://www.mehrli.uz" target="_blank" class="fonds-item-phone">
                      <div class="fonds-item-phone-icon">
                          <NuxtImg src="/images/global.svg"></NuxtImg>
                      </div>
                      <div class="fonds-item-phone-val">www.mehrli.uz</div>
                  </a>
                  <div class="fonds-item-hr"></div>
              </div>
          </div>
          <div class="fonds-item-des">Является негосударственной некоммерческой организацией в форме учреждения созданного при учредительстве Союза молодежи Узбекистана</div>
        </div>
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
    &-item {
      padding: 10px;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      &:last-child{
          margin-bottom: 0;
      }
      &-top{
          display: flex;
          gap: 10px;
      }
      &-icon{
          img{
              width: 80px;
              height: 80px;
              border-radius: 80px;
          }
      }
      &-text{
          width: calc(100% - 90px);
      }
      &-title{
          line-height: 19.2px;
          font-size: 16px;
          color: #363845;
      }
      &-city{
          font-size: 12px;
          line-height: 14.4px;
          color: #6A6A6A;
      }
      &-hr{
          margin: 10px 0;
          background: #F6F6F6;
          width: 100%;
          height: 1px;
      }
      &-phone{
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
          &:last-child{
              margin-bottom: 0;
          }
          &-icon{
              width: 16px;
              height: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              img{
                  width: 16px;
              }
          }
          &-val{
              font-size: 12px;
              font-weight: 500;
              line-height: 100%;
              color: #363845;
          }
      }
      &-des{
          font-size: 12px;
          line-height: 16px;
          color: #6A6A6A;
      }
    }
  }
  </style>
  