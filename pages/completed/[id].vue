<template>
  <div class="info-pages">
    <ui-header-component
      left-route="/completed"
      center
      center-text="История"
    ></ui-header-component>
    <div class="history-container">
      <NuxtImg
        style="width: 100%"
        class="user-image"
        src="/images/img.png"
        alt="user"
      ></NuxtImg>
      <div class="info-panel">
        <div class="date">15 Февраля 2024</div>
        <div class="name">Сенбаев Арслан <span>(4 года)</span></div>
        <div class="info1">
          Каждая история наших подопечных — это история преодоления:
          обстоятельств, случайностей, себя. Юра лучше многих знает о том, что
          такое преодоление. Жизнь подбрасывала парню столько событий, которые
          могли сломать его, но Юра просто еще усерднее работал, чтобы
          преодолеть очередное препятствие. Мы верим, что и новые испытания Юра
          сможет преодолеть. Но для этого парню нужна наша помощь.
        </div>
        <div class="info2">
          В 2004 году родителей Юры лишили родительских прав. За подобными
          словами всегда стоит трагедия — трагедия семьи, трагедия детей,
          оказавшихся на попечении государства. Юра и его брат оказались в
          интернате. Несколько раз Юру пытались определить в приемную семью, но
          всякий раз он отказывался — не хотел разлучаться с братом,
          единственным оставшимся рядом родным человеком.
        </div>
      </div>
      <div class="photo-gallery">
        <div class="title">Фотогалерея</div>
        <div style="display: flex; gap: 10px; width: 100%" class="galleries">
          <div style="width: 65%" class="left">
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
          </div>
          <div
            style="width: 35%; display: flex; flex-direction: column; gap: 10px"
          >
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
            <NuxtImg
              style="width: 100%; height: 100%"
              src="/images/user.png"
              alt="user"
            ></NuxtImg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const heightDevice = inject('devicePlatform')
</script>

<style lang="scss" scoped>
.info-pages {
  max-height: v-bind(heightDevice);
  height: v-bind(heightDevice);
  width: 100%;
  overflow: hidden;
  & .history-container {
    max-height: calc(v-bind(heightDevice) - 75px);
    height: calc(v-bind(heightDevice) - 75px);
    padding: 0 20px;
    overflow-y: scroll;
    & .info-panel {
      border-radius: 0 0 12px 12px;
      padding: 20px 10px;
      background: var(--history-bg-card);
      & .date {
        font-weight: 500;
        font-size: 10px;
        color: var(--history-text-color);
        padding-bottom: 4px;
      }
      & .name {
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 18px;
        color: var(--history-card-title);
        & span {
          color: var(--history-card-title);
        }
      }
      & .info1 {
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: var(--history-text-color);
      }
      & .info2 {
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        color: var(--history-text-color);
      }
    }
    & .photo-gallery {
      margin: 30px 0 20px;
      border-radius: 12px;
      padding: 10px 10px 20px 10px;
      background: var(--history-bg-card);
      & .title {
        padding-bottom: 8px;
        font-weight: 600;
        font-size: 16px;
        color: var(--history-card-title);
      }
    }
  }
}
</style>
