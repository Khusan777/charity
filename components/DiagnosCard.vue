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
      <div class="content">
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
            <div class="text">Помогли</div>
            <div class="date">45 558</div>
          </div>
        </div>
      </div>
    </div>
    <UiBorderLine></UiBorderLine>
    <div class="diagnos-data">
      <div class="info">
        <div class="title">Диагноз</div>
        <div class="description">
          Дефект предсердно-желудочковой перегородки
        </div>
      </div>
      <div class="info">
        <div class="title">Вид помощи</div>
        <div class="description">Хирургическое лечение</div>
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
  </div>
</template>

<script setup>
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
  background: #fff;
  & .published {
    padding-bottom: 7px;
    & .content {
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
      background: #f6f6f6;
      & .image {
        width: 16px;
        height: 16px;
      }
      & .text {
        font-weight: 400;
        font-size: 8px;
        line-height: normal;
        color: #6a6a6a;
      }
      & .date {
        font-weight: 500;
        font-size: 10px;
        line-height: normal;
        color: #2c2d35;
      }
    }
  }
  & .diagnos-data {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    color: #6a6a6a;
  }
  .description {
    line-height: normal;
    font-weight: 400;
    font-size: 12px;
    color: #363845;
  }
}
</style>
