<template>
  <div
    class="chart-card"
    @click="$router.push({ path: '/main/1', query: { completed: false } })"
  >
    <div class="fond-container">
      <div class="data">
        <NuxtImg class="fond-img" src="/images/fond.svg" alt="fond"></NuxtImg>
        <div>Mehrli qo'llar</div>
      </div>
    </div>
    <div class="user-disease">
      <NuxtImg class="image-user" src="/images/user.png" alt="user"></NuxtImg>
      <div>
        <UiBadge
          with-image
          img-ref="/images/badge/urgentHelp.svg"
          status-text="Нужна срочная помощь"
          back-color="rgb(255, 243, 224)"
          colour="rgb(251, 140, 0)"
        ></UiBadge>
        <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
        <div class="city">Город Фергана</div>
        <UiBorderLine></UiBorderLine>
        <div class="disease">Дефект предсердно-желудочковой перегородки</div>
      </div>
    </div>
    <UiCollectionProgress is-completed="false"></UiCollectionProgress>
  </div>
</template>

<script setup>
defineProps({
  feeItem: {
    type: Object,
    required: true,
  },
})
</script>
