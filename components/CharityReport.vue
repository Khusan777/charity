<template>
  <div class="charity-reports" @click="$router.push('/completed/1')">
    <div class="data">
      <NuxtImg class="image" src="/images/img.png" alt="user"></NuxtImg>
      <div class="title">Благодаря вам у маленького Юры все хорошо!</div>
      <div class="description">
        Карниопластика была единственным шансом для...
      </div>
      <div class="detail">Читать историю</div>
    </div>
    <div class="data">
      <NuxtImg class="image" src="/images/img.png" alt="user"></NuxtImg>
      <div class="title">Благодаря вам у маленького Юры все хорошо!</div>
      <div class="description">
        Карниопластика была<br />
        единственным шансом для...
      </div>
      <div class="detail">Читать историю</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.charity-reports {
  display: flex;
  gap: 10px;
  padding: 0 20px;
  & .data {
    width: 50%;
    border-radius: 12px;
    background: var(--reports-card-bg);
    & .image {
      width: 100%;
    }
    & .title {
      font-weight: 700;
      font-size: 12px;
      color: var(--reports-card-title);
      line-height: normal;
      padding: 10px 10px 5.5px;
    }
    & .description {
      font-weight: 400;
      font-size: 10px;
      color: var(--reports-card-desc);
      padding: 0 10px 5px;
    }
    & .detail {
      padding: 0 10px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-style: italic;
      font-weight: 500;
      font-size: 10px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: #0073ff;
    }
  }
}
</style>
