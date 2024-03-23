<template>
  <div class="help-data">
    <UiBadge
      v-if="isCompleted === 'false'"
      style="margin-bottom: 10px"
      with-image
      img-ref="/images/badge/urgentHelp.svg"
      status-text="Нужна срочная помощь"
      back-color="rgb(255, 243, 224)"
      colour="rgb(251, 140, 0)"
    ></UiBadge>
    <UiBadge
      v-else
      style="margin-bottom: 10px"
      with-image
      img-ref="/images/badge/treatment.svg"
      status-text="На лечении"
      back-color="#EDF8E9"
      colour="#66ca28"
    ></UiBadge>
    <UiCompletedProgress v-if="isCompleted === 'true'"></UiCompletedProgress>
    <UiCollectionProgress v-else is-completed="true"></UiCollectionProgress>
    <div class="published">
      <div class="info">
        <div class="data">
          <NuxtImg
            class="image"
            src="/images/calendar.svg"
            alt="calendar"
          ></NuxtImg>
          <div>
            <div class="text">Дата публикации</div>
            <div class="date">10 февр. 2024</div>
          </div>
        </div>
        <div class="data">
          <NuxtImg
            class="image"
            src="/images/helps.svg"
            alt="calendar"
          ></NuxtImg>
          <div>
            <div class="text">Уже помогают</div>
            <div class="date">45 558</div>
          </div>
        </div>
      </div>
    </div>
    <UiBorderLine></UiBorderLine>
    <div class="diagnos-data">
      <div class="info">
        <div>
          <div class="title">Диагноз</div>
          <div class="description">
            Дефект предсердно-желудочковой перегородки
          </div>
        </div>
      </div>
      <div class="info">
        <div>
          <div class="title">Вид помощи</div>
          <div class="description">Хирургическое лечение</div>
        </div>
        <NuxtImg
          v-if="$colorMode.preference === 'light'"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          height="20"
          src="/images/menu_light.svg"
          alt="menu"
        ></NuxtImg>
        <NuxtImg
          v-else
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          height="20"
          src="/images/menu_dark.svg"
          alt="menu"
        ></NuxtImg>
      </div>
      <div class="building">
        <div>
          <div class="title">Вид помощи</div>
          <div class="description">Хирургическое лечение</div>
        </div>
        <NuxtImg
          width="48"
          height="20"
          src="/images/fond.png"
          alt="fond"
        ></NuxtImg>
      </div>
      <div class="building">
        <div>
          <div class="title">Медицинское учреждение</div>
          <div class="description">Heart Team Clinic</div>
        </div>
        <NuxtImg height="20" src="/images/med.svg" alt="med"></NuxtImg>
      </div>
    </div>
    <BottomSheetDisease></BottomSheetDisease>
  </div>
</template>

<script setup>
import BottomSheetDisease from '~/components/ui/BottomSheetDisease.vue'

defineProps({
  isCompleted: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.help-data {
  margin: 0 20px 20px;
  border-radius: 12px;
  padding: 16px 10px;
  background: var(--bg-patient-card);
  & .published {
    padding-bottom: 7px;
    & .info {
      display: flex;
      gap: 10px;
    }
    & .data {
      padding: 8px 0 10px 8px;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 5px;
      border-radius: 6px;
      background: var(--published-bg);
      & .image {
        width: 16px;
        height: 16px;
      }
      & .text {
        font-weight: 400;
        font-size: 8px;
        line-height: normal;
        color: var(--published-title);
      }
      & .date {
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        text-align: left;
        color: var(--published-date);
      }
    }
  }
  & .diagnos-data {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    & .info {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    & .building {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
  .title {
    line-height: normal;
    font-weight: 400;
    font-size: 10px;
    color: var(--diagnos-data-title);
  }
  .description {
    line-height: normal;
    font-weight: 400;
    font-size: 12px;
    color: var(--diagnos-data-desc);
  }
}
</style>
