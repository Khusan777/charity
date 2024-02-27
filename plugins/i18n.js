import { createI18n } from 'vue-i18n'
import { defaultLocale, languages } from '~/locales'

export default defineNuxtPlugin(({ vueApp }) => {
  const messages = Object.assign(languages)

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    locale: defaultLocale,
    fallbackLocale: 'ru',
    messages,
  })
  vueApp.use(i18n)
})
