<template>
  <div
    style="
      overflow-y: auto;
      background: var(--chart-card-bg);
      border-radius: 12px;
      margin: 0 20px 10px;
      padding: 10px 10px 0 10px;
    "
  >
    <div
      style="
        display: flex;
        gap: 10px;
        width: 100%;
        margin-top: 5px;
        padding-bottom: 8px;
      "
    >
      <UiAnimatedSkeleton height="61px" width="91px" border-radius="6px" />
      <div>
        <div style="margin-bottom: 8px">
          <UiAnimatedSkeleton height="18px" width="200px" border-radius="8px" />
        </div>
        <div>
          <UiAnimatedSkeleton height="8px" width="200px" />
        </div>
        <UiBorderLine></UiBorderLine>
        <div>
          <UiAnimatedSkeleton height="10px" width="200px" />
        </div>
      </div>
    </div>
    <div
      style="
        padding-bottom: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      "
    >
      <UiAnimatedSkeleton height="15px" width="100%" border-radius="12px" />
      <UiAnimatedSkeleton height="15px" width="100%" border-radius="12px" />
      <UiAnimatedSkeleton height="15px" width="100%" border-radius="12px" />
    </div>
  </div>
</template>
