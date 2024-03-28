<template>
  <div
    id="offcanvasBottom"
    style="height: 80%; background: var(--bottom-sheet-bg)"
    class="offcanvas offcanvas-bottom rounded-top-4"
    tabindex="-1"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div style="padding: 20px 20px 0" class="offcanvas-header">
      <h5
        id="offcanvasBottomLabel"
        style="color: var(--bottom-sheet-title)"
        class="offcanvas-title"
      >
        Фильтры
      </h5>
      <NuxtImg
        width="20"
        height="20"
        data-bs-dismiss="offcanvas"
        src="/images/x-icon.svg"
        alt="x-icon"
      ></NuxtImg>
    </div>
    <div style="color: var(--bottom-sheet-desc)" class="subtitle">
      Ниже выберите параметры для поиска
    </div>
    <div class="offcanvas-body">
      <div v-for="item in regions" :key="item" style="margin-top: -7px">
        <UiCheckbox
          v-model:checked="item.value"
          with-border-line
          label-clicked
          :label="`<div style='font-weight:400;font-size:14px;color:var(--checkbox-region-title)'>${item.title}</div><div style='font-weight:400;font-size:10px;color:var(--checkbox-region-subtitle);'>${item.subtitle}</div>`"
        ></UiCheckbox>
      </div>
    </div>
    <div v-ripple.500="'rgba(255, 255, 255, 0.35)'" class="btns">
      <UiButton
        style="background: transparent; color: #575965"
        text-btn="Сбросить фильтр"
        :with-disabled="false"
        @click="unCheckAll"
      ></UiButton>
      <UiButton
        text-btn="Применить"
        :with-disabled="false"
        @click="toggleOffcanvas"
      ></UiButton>
    </div>
  </div>
</template>

<script setup>
const regions = reactive([
  {
    title: 'Вся республика',
    subtitle: 'вся республика',
    value: false,
  },
  {
    title: 'Ташкент',
    subtitle: 'Ташкентская область',
    value: false,
  },
  {
    title: 'Андижан ',
    subtitle: 'Андижанская область',
    value: false,
  },
  {
    title: 'Бухара',
    subtitle: 'Бухарская область',
    value: false,
  },
  {
    title: 'Фергана',
    subtitle: 'Ферганская область',
    value: false,
  },
  {
    title: 'Джизак',
    subtitle: 'Джизакская область',
    value: false,
  },
  {
    title: 'Наманган',
    subtitle: 'Наманганская область',
    value: false,
  },
  {
    title: 'Навои',
    subtitle: 'Навоийская область',
    value: false,
  },
  {
    title: 'Карши',
    subtitle: 'Кашкадарьинская область',
    value: false,
  },
  {
    title: 'Самарканд',
    subtitle: 'Самаркандкая область',
    value: false,
  },
  {
    title: 'Термез',
    subtitle: 'Сурхандарьинская область',
    value: false,
  },
  {
    title: 'Ургенч',
    subtitle: 'Хорезмский район',
    value: false,
  },
])
const unCheckAll = () => {
  regions.map((item) => {
    return (item.value = false)
  })
}
const toggleOffcanvas = () => {
  const closeCanvas = document?.querySelector('[data-bs-dismiss="offcanvas"]')
  closeCanvas?.click()
}
</script>

<style lang="scss" scoped>
.offcanvas-bottom {
  & .offcanvas-body {
    padding: 20px 20px 0;
  }
  & .subtitle {
    padding: 0 20px 10px;
    font-weight: 400;
    font-size: 12px;
    color: #575965;
  }
  & .btns {
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 15px 20px 20px;
  }
}
</style>
