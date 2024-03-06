<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      margin: 20px;
      padding: 15px 15px 15px;
      border-radius: 12px;
      background: #fff;
      height: auto;
    "
  >
    <div style="margin-bottom: 6px">
      <div style="margin-bottom: 3px">
        <UiAnimatedSkeleton height="7px" width="260px" />
      </div>
      <div style="margin-bottom: 3px">
        <UiAnimatedSkeleton height="7px" width="260px" />
      </div>
      <div style="margin-bottom: 3px">
        <UiAnimatedSkeleton height="7px" width="260px" />
      </div>
      <UiAnimatedSkeleton height="7px" width="80px" />
    </div>
    <div>
      <UiAnimatedSkeleton height="28px" width="100px" border-radius="6px" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
