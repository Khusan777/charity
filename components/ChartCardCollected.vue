<template>
  <div
    class="chart-card"
    @click="$router.push({ path: '/main/1', query: { completed: true } })"
  >
    <div class="fond-container">
      <div class="data">
        <NuxtImg class="fond-img" src="/images/fond.svg" alt="fond"></NuxtImg>
        <div>Mehrli qo'llar</div>
      </div>
      <NuxtImg class="refferal" src="/images/ref.svg" alt="ref"></NuxtImg>
    </div>
    <div class="user-disease">
      <NuxtImg class="image-user" src="/images/user.png" alt="user"></NuxtImg>
      <div>
        <UiBadge
          with-image
          img-ref="/images/badge/treatment.svg"
          status-text="На лечении"
          back-color="#f1f8e9"
          color="#66ca28"
        ></UiBadge>
        <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
        <div class="city">Город Фергана</div>
        <UiBorderLine></UiBorderLine>
        <div class="disease">Дефект предсердно-желудочковой перегородки</div>
      </div>
    </div>
    <UiCompletedProgress></UiCompletedProgress>
  </div>
</template>

<script setup lang="ts"></script>
