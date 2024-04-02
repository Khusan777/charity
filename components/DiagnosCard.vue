<template>
  <div class="help-data">
    <UiBadge
      v-if="!isCompleted && patient?.type_need?.id !== 2"
      style="margin-bottom: 10px"
      with-image
      :img-ref="patient?.type_need?.icon"
      :status-text="
        locale === 'en'
          ? patient?.type_need?.name_en
          : locale === 'uz'
            ? patient?.type_need?.name_uz
            : patient?.type_need?.name_ru
      "
      back-color="rgb(255, 243, 224)"
      colour="rgb(251, 140, 0)"
    ></UiBadge>
    <UiBadge
      v-if="isCompleted && patient?.type_need?.id !== 2"
      style="margin-bottom: 10px"
      with-image
      :img-ref="patient?.status?.icon"
      :status-text="
        locale === 'en'
          ? patient?.status?.name_en
          : locale === 'uz'
            ? patient?.status?.name_uz
            : patient?.status?.name_ru
      "
      back-color="#EDF8E9"
      colour="#66ca28"
    ></UiBadge>
    <UiCompletedProgress
      v-if="isCompleted"
      :amount="patient?.amount"
    ></UiCompletedProgress>
    <UiCollectionProgress
      v-else
      :amount="{
        collectedAmount: patient?.collected || 0,
        amount: patient?.amount,
        remainsAmount: patient?.remains || 0,
      }"
      is-completed="true"
    ></UiCollectionProgress>
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
            <div class="date">{{ formattedDate(patient?.created_at) }}</div>
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
            <div class="date">{{ patient?.transactions_count }}</div>
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
            {{
              locale === 'uz'
                ? patient?.sick_category?.name_uz
                : locale === 'en'
                  ? patient?.sick_category?.name_en
                  : patient?.sick_category?.name_ru
            }}
          </div>
        </div>
        <NuxtImg
          v-if="appStore.theme === 'light'"
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
      <div class="info">
        <div>
          <div class="title">Вид помощи</div>
          <div class="description">
            {{
              locale === 'uz'
                ? patient?.type_help?.name_uz
                : locale === 'en'
                  ? patient?.type_help?.name_en
                  : patient?.type_help?.name_ru
            }}
          </div>
        </div>
      </div>
      <div class="building">
        <div>
          <div class="title">Фонд (ННО)</div>
          <div class="description">
            {{
              locale === 'uz'
                ? patient?.fond?.name_uz
                : locale === 'en'
                  ? patient?.fond?.name_en
                  : patient?.fond?.name_ru
            }}
          </div>
        </div>
        <NuxtImg
          width="20"
          height="20"
          :src="`https://dev-promo23.click.uz/storage/${patient?.fond?.icon}`"
          alt="fond"
        ></NuxtImg>
      </div>
      <div class="building">
        <div>
          <div class="title">Медицинское учреждение</div>
          <div class="description">
            {{
              locale === 'uz'
                ? patient?.clinic?.name_uz
                : locale === 'en'
                  ? patient?.clinic?.name_en
                  : patient?.clinic?.name_ru
            }}
          </div>
        </div>
        <NuxtImg
          height="20"
          :src="`https://dev-promo23.click.uz/storage/${patient?.clinic?.icon}`"
          alt="med"
        ></NuxtImg>
      </div>
    </div>
    <BottomSheetDisease
      :disease-info="patient?.sick_category"
    ></BottomSheetDisease>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import BottomSheetDisease from '~/components/ui/BottomSheetDisease.vue'

const appStore = useAppStore()
const { locale } = useI18n()
defineProps({
  isCompleted: {
    type: Boolean,
    required: true,
  },
  patient: {
    type: Object,
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
