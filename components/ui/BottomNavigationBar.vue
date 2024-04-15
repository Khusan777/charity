<template>
  <div class="footer-navigation">
    <div style="width: 25%" class="main-nav">
      <NuxtLink class="my-link" to="/main">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M24.0832 4.78398V12.7173C24.0832 13.4792 23.9166 13.7537 23.7928 13.8702C23.6535 14.0012 23.3219 14.1673 22.4815 14.1673H17.7682C16.9278 14.1673 16.5961 14.0012 16.4569 13.8702C16.333 13.7537 16.1665 13.4792 16.1665 12.7173V4.78398C16.1665 4.02213 16.333 3.74763 16.4569 3.63108C16.5961 3.50011 16.9278 3.33398 17.7682 3.33398H22.4815C23.3219 3.33398 23.6535 3.50011 23.7928 3.63108C23.9166 3.74763 24.0832 4.02213 24.0832 4.78398Z"
            stroke="#9395A5"
            stroke-width="2"
          />
          <path
            d="M11.8332 15.284V23.2173C11.8332 23.9792 11.6666 24.2537 11.5428 24.3702C11.4035 24.5012 11.0719 24.6673 10.2315 24.6673H5.51817C4.67776 24.6673 4.34614 24.5012 4.20692 24.3702C4.08304 24.2537 3.9165 23.9792 3.9165 23.2173V15.284C3.9165 14.5221 4.08304 14.2476 4.20692 14.1311C4.34614 14.0001 4.67776 13.834 5.51817 13.834H10.2315C11.0719 13.834 11.4035 14.0001 11.5428 14.1311C11.6666 14.2476 11.8332 14.5221 11.8332 15.284Z"
            stroke="#9395A5"
            stroke-width="2"
          />
          <path
            d="M24.0832 19.95V23.2167C24.0832 23.9785 23.9166 24.253 23.7928 24.3696C23.6535 24.5005 23.3219 24.6667 22.4815 24.6667H17.7682C16.9278 24.6667 16.5961 24.5005 16.4569 24.3696C16.333 24.253 16.1665 23.9785 16.1665 23.2167V19.95C16.1665 19.1881 16.333 18.9136 16.4569 18.7971C16.5961 18.6661 16.9278 18.5 17.7682 18.5H22.4815C23.3219 18.5 23.6535 18.6661 23.7928 18.7971C23.9166 18.9136 24.0832 19.1881 24.0832 19.95Z"
            stroke="#9395A5"
            stroke-width="2"
          />
          <path
            d="M11.8332 4.78398V8.05065C11.8332 8.81251 11.6666 9.08701 11.5428 9.20355C11.4035 9.33453 11.0719 9.50065 10.2315 9.50065H5.51817C4.67776 9.50065 4.34614 9.33453 4.20692 9.20355C4.08304 9.08701 3.9165 8.81251 3.9165 8.05065V4.78398C3.9165 4.02213 4.08304 3.74763 4.20692 3.63108C4.34614 3.50011 4.67776 3.33398 5.51817 3.33398H10.2315C11.0719 3.33398 11.4035 3.50011 11.5428 3.63108C11.6666 3.74763 11.8332 4.02213 11.8332 4.78398Z"
            stroke="#9395A5"
            stroke-width="2"
          />
        </svg>
        <div class="text-page">{{ $t('main.page') }}</div>
      </NuxtLink>
    </div>
    <div style="width: 25%" class="done-nav">
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
        <div class="text-page">{{ $t('completed.tab-name') }}</div>
      </NuxtLink>
    </div>
    <div style="width: 25%" class="notification-nav">
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
        <div class="text-page">{{ $t('push.title') }}</div>
      </NuxtLink>
    </div>
    <div style="width: 25%" class="profile-nav">
      <NuxtLink class="my-link" no-prefetch to="/profile">
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
        <div class="text-page">{{ $t('profile.title') }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-navigation {
  z-index: 1000;
  border-top: 1px solid var(--bottom-nav-top);
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  padding: 10px 20px 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: var(--bg-color);
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
    white-space: normal;
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
