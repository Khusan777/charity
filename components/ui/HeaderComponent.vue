<template>
  <div class="aheader">
    <div class="header-content">
      <nuxt-link v-if="leftRoute" :to="leftRoute">
        <NuxtImg
          v-if="$colorMode.value === 'light'"
          width="20"
          height="22"
          src="/images/left-icon-light.svg"
          alt="left-icon"
        ></NuxtImg>
        <NuxtImg
          v-else
          width="20"
          height="22"
          src="/images/left-icon-dark.svg"
          alt="left-icon"
        ></NuxtImg>
      </nuxt-link>
      <div v-if="!left && !leftRoute" style="width: 20px; height: 24px"></div>
      <div v-if="center" class="header-center">
        <div class="header-center-text">
          {{ centerText }}
        </div>
      </div>
      <div v-if="left" class="left-container">
        <div class="logo-data">
          <NuxtImg
            v-if="$colorMode.value === 'light'"
            class="logo-img"
            src="/images/logo_light.svg"
            alt="logo"
          ></NuxtImg>
          <NuxtImg
            v-else
            class="logo-img"
            src="/images/logo_dark.svg"
            alt="logo"
          ></NuxtImg>
        </div>
        <!--        <div v-if="!loading" class="help-now">-->
        <!--          <div class="counters">-->
        <!--            <div class="circle"></div>-->
        <!--            <div class="text">158</div>-->
        <!--            <NuxtImg-->
        <!--              class="icon"-->
        <!--              src="/images/group-icon.svg"-->
        <!--              alt="group-icon"-->
        <!--            ></NuxtImg>-->
        <!--          </div>-->
        <!--          <div class="text-content">-->
        <!--            <div>Сейчас помогают</div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div v-else style="display: flex; flex-direction: column; gap: 5px">-->
        <!--          <UiAnimatedSkeleton height="10px" width="55px" />-->
        <!--          <UiAnimatedSkeleton height="8px" width="100px" />-->
        <!--        </div>-->
      </div>
      <div v-if="right" class="header-right">
        <div class="header-right-text">
          <NuxtImg
            style="width: 14px; height: 14px"
            src="/images/x-icon.svg"
            alt="logo"
          ></NuxtImg>
        </div>
      </div>
      <div v-else style="width: 20px; height: 22px"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  left: {
    type: Boolean,
  },
  leftRoute: {
    type: String,
    default: null,
  },
  center: {
    type: Boolean,
  },
  centerText: { type: String, default: null },
  right: { type: Boolean },
  color: { type: String, default: '' },
})
</script>

<style lang="scss" scoped>
.aheader {
  padding: 25px 20px 24px;
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .left-container {
      display: flex;
      align-items: center;
      gap: 20px;
      & .logo-data {
        display: flex;
        align-items: center;
        & .logo-img {
          width: 166px;
          height: 36px;
        }
      }

      & .help-now {
        display: flex;
        flex-direction: column;
        & .counters {
          display: flex;
          align-items: center;
          gap: 5px;
          & .circle {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgb(102, 202, 40);
          }

          & .text {
            color: var(--text-count);
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
            letter-spacing: 0;
            text-align: left;
          }

          & .icon {
            width: 14px;
            height: 10px;
          }
        }

        & .text-content {
          color: var(--now-help);
          font-size: 10px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0;
          text-align: left;
        }
      }
    }
  }
  .header-center {
    .header-center-text {
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      color: var(--header-center-text);
      font-style: normal;
      line-height: normal;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .header-right-text {
      text-align: right;
    }
  }
}
</style>
