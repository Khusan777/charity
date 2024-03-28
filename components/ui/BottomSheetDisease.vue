<template>
  <div
    id="offcanvasBottom"
    style="height: 90%; background: var(--bottom-sheet-bg)"
    class="offcanvas offcanvas-bottom rounded-top-4"
    tabindex="-1"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div style="padding: 20px 20px 0" class="offcanvas-header">
      <h5 id="offcanvasBottomLabel" class="offcanvas-title">
        {{
          $i18n.locale === 'uz'
            ? diseaseInfo?.name_uz
            : $i18n.locale === 'en'
              ? diseaseInfo?.name_en
              : diseaseInfo?.name_ru
        }}
      </h5>
      <NuxtImg
        width="20"
        height="20"
        data-bs-dismiss="offcanvas"
        src="/images/x-icon.svg"
        alt="x-icon"
      ></NuxtImg>
    </div>
    <div class="offcanvas-body">
      <div
        style="
          padding-bottom: 10px;
          color: var(--published-title);
          padding-top: 15px;
          font-weight: 400;
          font-size: 12px;
        "
        class="info"
      >
        <div
          v-html="
            $i18n.locale === 'uz'
              ? diseaseInfo?.description_uz
              : $i18n.locale === 'en'
                ? diseaseInfo?.description_en
                : diseaseInfo?.description_ru
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  diseaseInfo: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.offcanvas {
  & .offcanvas-title {
    margin-right: 4px;
    color: var(--bottom-sheet-title);
    line-height: normal;
  }
  & .offcanvas-body {
    padding: 0 20px;
  }
}
</style>
