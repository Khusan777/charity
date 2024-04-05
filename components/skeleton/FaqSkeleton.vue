<template>
  <div
    style="
    padding: 0 20px 0; 
    display: flex; 
    flex-direction: column; 
    gap: 16px"
  >
    <div style="
      background: var(--chart-card-bg); 
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 15px;
      height: 50px;"
    >
      <UiAnimatedSkeleton height="36px" border-radius="6px" width="100%" />
      <UiAnimatedSkeleton height="25px" width="25px" border-radius="25px" />
    </div>
    <div style="
      background: var(--chart-card-bg); 
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 15px;
      height: 50px;"
    >
      <UiAnimatedSkeleton height="36px" width="100%" />
      <UiAnimatedSkeleton height="25px" width="25px" border-radius="25px" />
    </div>
  </div>
</template>
