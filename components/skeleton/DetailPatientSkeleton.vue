<template>
  <div class="skeleton-container" style="padding: 0 20px 0">
    <UiAnimatedSkeleton
      style="margin-bottom: 6px"
      height="22px"
      width="24%"
      border-radius="50px"
    />
    <UiAnimatedSkeleton height="22px" width="70%" border-radius="5px" />
    <UiAnimatedSkeleton
      style="margin-top: 4px"
      height="16px"
      width="40%"
      border-radius="5px"
    />
    <UiAnimatedSkeleton
      style="margin-top: 12px; margin-bottom: 20px"
      height="230px"
      width="100%"
      border-radius="16px"
    />
    <div
      style="
        margin-bottom: 18px;
        background: var(--chart-card-bg);
        border-radius: 12px;
        padding: 16px 10px 16px 10px;
      "
    >
      <div style="margin-bottom: 8px">
        <UiAnimatedSkeleton height="20px" width="95px" border-radius="50px" />
      </div>
      <div
        style="
          display: flex;
          justify-content: flex-start;
          gap: 5px;
          padding-bottom: 5px;
        "
      >
        <UiAnimatedSkeleton height="18px" width="18px" border-radius="50px" />
        <UiAnimatedSkeleton height="18px" width="50%" border-radius="5px" />
      </div>
      <div style="margin-bottom: 4px">
        <UiAnimatedSkeleton height="7px" width="100%" border-radius="3px" />
      </div>
      <div style="margin-bottom: 10px">
        <UiAnimatedSkeleton height="17px" width="70%" border-radius="3px" />
      </div>
      <div style="display: flex; gap: 10px; width: 100%; margin-bottom: 10px">
        <UiAnimatedSkeleton height="40px" width="50%" border-radius="6px" />
        <UiAnimatedSkeleton height="40px" width="50%" border-radius="6px" />
      </div>
      <UiBorderLine style="margin-bottom: 12px"></UiBorderLine>
      <div style="margin-bottom: 12px">
        <UiAnimatedSkeleton
          style="margin-bottom: 2px"
          height="14px"
          width="65%"
          border-radius="3px"
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <UiAnimatedSkeleton height="12px" width="40%" border-radius="3px" />
          <UiAnimatedSkeleton
            style="margin-top: -15px"
            height="21px"
            width="20px"
            border-radius="50px"
          />
        </div>
      </div>
      <div style="margin-bottom: 12px">
        <UiAnimatedSkeleton
          style="margin-bottom: 2px"
          height="14px"
          width="65%"
          border-radius="3px"
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <UiAnimatedSkeleton height="12px" width="40%" border-radius="3px" />
        </div>
      </div>
      <div style="margin-bottom: 12px">
        <UiAnimatedSkeleton
          style="margin-bottom: 2px"
          height="14px"
          width="65%"
          border-radius="3px"
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <UiAnimatedSkeleton height="12px" width="40%" border-radius="3px" />
          <UiAnimatedSkeleton
            style="margin-top: -15px"
            height="22px"
            width="48px"
            border-radius="2px"
          />
        </div>
      </div>
      <div>
        <UiAnimatedSkeleton
          style="margin-bottom: 2px"
          height="14px"
          width="65%"
          border-radius="3px"
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <UiAnimatedSkeleton height="12px" width="40%" border-radius="3px" />
          <UiAnimatedSkeleton
            style="margin-top: -15px"
            height="24px"
            width="25px"
            border-radius="3px"
          />
        </div>
      </div>
    </div>
    <div
      style="
        background: var(--chart-card-bg);
        border-radius: 12px;
        margin-bottom: 30px;
        padding: 16px 10px 8px 10px;
      "
    >
      <UiAnimatedSkeleton
        style="margin-bottom: 15px"
        height="22px"
        width="60%"
        border-radius="5px"
      />
      <div v-for="i in 7" :key="i">
        <UiAnimatedSkeleton
          style="margin-bottom: 8px"
          height="15px"
          width="100%"
          border-radius="3px"
        />
      </div>
      <br />
      <div v-for="i in 7" :key="i">
        <UiAnimatedSkeleton
          style="margin-bottom: 8px"
          height="15px"
          width="100%"
          border-radius="3px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style lang="scss" scoped>
.skeleton-container {
  overflow-y: scroll;
  max-height: calc(v-bind(heightDevice) - 135px);
  height: calc(v-bind(heightDevice) - 135px);
}
</style>
