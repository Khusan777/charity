<template>
  <div
    style="
      overflow-y: auto;
      background: var(--chart-card-bg);
      border-radius: 12px;
      margin: 10px 20px 8px;
      padding: 10px 10px 0 10px;
    "
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
      "
    >
      <div style="display: flex; align-items: center; gap: 4px">
        <UiAnimatedSkeleton height="24px" width="24px" border-radius="50%" />
        <UiAnimatedSkeleton height="8px" width="100px" />
      </div>
    </div>
    <div style="display: flex; gap: 10px; width: 100%; padding-bottom: 8px">
      <UiAnimatedSkeleton height="91px" width="91px" border-radius="6px" />
      <div>
        <div style="margin-bottom: 8px">
          <UiAnimatedSkeleton
            height="20px"
            width="100px"
            border-radius="50px"
          />
        </div>
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
