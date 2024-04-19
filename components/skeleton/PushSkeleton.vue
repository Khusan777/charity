<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <div
      style="
        background: var(--chart-card-bg);
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        height: 90px;
        border-radius: 10px;
        margin-bottom: 10px;
      "
    >
      <UiAnimatedSkeleton height="70px" width="70px" border-radius="6px" />
      <div style="width: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            gap: 10px;
          "
        >
          <UiAnimatedSkeleton height="34px" width="90%" />
        </div>
        <UiAnimatedSkeleton height="15px" width="30%" />
      </div>
    </div>
  </div>
</template>
