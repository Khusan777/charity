<template>
  <div class="footer-navigation">
    <div class="main-nav">
      <NuxtLink class="my-link" to="/main">
        <NuxtImg src="/images/nav/main.svg" alt="main"></NuxtImg>
        <div class="text-page">Главный</div>
      </NuxtLink>
    </div>
    <div class="done-nav">
      <NuxtLink class="my-link" to="/completed" no-prefetch>
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3333 25.6666H18.3333C24.1667 25.6666 26.5 23.3333 26.5 17.5V10.5C26.5 4.66665 24.1667 2.33331 18.3333 2.33331H11.3333C5.49999 2.33331 3.16666 4.66665 3.16666 10.5V17.5C3.16666 23.3333 5.49999 25.6666 11.3333 25.6666Z"
            stroke="#9395A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.875 14L13.1767 17.3017L19.7917 10.6984"
            stroke="#9395A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="text-page">Завершённые</div>
      </NuxtLink>
    </div>
    <div class="notification-nav">
      <NuxtLink class="my-link" no-prefetch to="/notification">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3483 3.73331C15.9867 3.62831 15.6133 3.54664 15.2283 3.49997C14.1083 3.35997 13.035 3.44164 12.0317 3.73331C12.37 2.86997 13.21 2.26331 14.19 2.26331C15.17 2.26331 16.01 2.86997 16.3483 3.73331Z"
            fill="#9395A5"
            stroke="#9395A5"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.69 22.2367C17.69 24.1617 16.115 25.7367 14.19 25.7367C13.2333 25.7367 12.3467 25.34 11.7167 24.71C11.0867 24.08 10.69 23.1934 10.69 22.2367"
            stroke="#9395A5"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M14.19 3.3949C10.3283 3.3949 7.18995 6.53323 7.18995 10.3949V13.7666C7.18995 14.4782 6.88662 15.5632 6.52495 16.1699L5.18328 18.3982C4.35495 19.7749 4.92662 21.3032 6.44328 21.8166C11.4716 23.4966 16.8966 23.4966 21.925 21.8166C23.3366 21.3499 23.955 19.6816 23.185 18.3982L21.8433 16.1699C21.4933 15.5632 21.19 14.4782 21.19 13.7666V10.3949C21.19 6.5449 18.04 3.3949 14.19 3.3949Z"
            stroke="#9395A5"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
        <div class="text-page">Уведомления</div>
      </NuxtLink>
    </div>
    <div class="profile-nav">
      <NuxtLink class="my-link" no-prefetch to="/userprofile">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.64 14.91C14.5583 14.8983 14.4533 14.8983 14.36 14.91C12.3067 14.84 10.6733 13.16 10.6733 11.095C10.6733 8.98331 12.3767 7.26831 14.5 7.26831C16.6117 7.26831 18.3267 8.98331 18.3267 11.095C18.315 13.16 16.6933 14.84 14.64 14.91Z"
            stroke="#9395A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.3633 22.61C20.2867 24.5117 17.5333 25.6667 14.5 25.6667C11.4667 25.6667 8.71334 24.5117 6.63667 22.61C6.75334 21.5133 7.45334 20.44 8.70167 19.6C11.8983 17.4767 17.125 17.4767 20.2983 19.6C21.5467 20.44 22.2467 21.5133 22.3633 22.61Z"
            stroke="#9395A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 25.6666C20.9433 25.6666 26.1667 20.4433 26.1667 14C26.1667 7.55666 20.9433 2.33331 14.5 2.33331C8.05668 2.33331 2.83334 7.55666 2.83334 14C2.83334 20.4433 8.05668 25.6666 14.5 25.6666Z"
            stroke="#9395A5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="text-page">Профиль</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-navigation {
  border-top: 1px solid rgb(216, 219, 240);
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  padding: 10px 20px 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgb(226, 228, 240);
  & img {
    width: 28px;
    height: 28px;
  }
  & .my-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .text-page {
    color: rgb(144, 147, 162);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
  }
}

.my-link.router-link-active svg path {
  fill: none;
  stroke: rgb(0, 115, 255);
}
.my-link.router-link-active .text-page {
  color: rgb(0, 115, 255) !important;
}
</style>
