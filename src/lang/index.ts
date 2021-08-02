import { createI18n } from 'vue-i18n'
import { getLanguage } from '@/utils/cookies'
// element-ui built-in lang
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
// User defined lang
import enLocale from './en'
import zhLocale from './zh'


const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

export const getLocale = (): string => {
  const cookieLanguage: string = getLanguage()
  if (cookieLanguage) {
    document.documentElement.lang = cookieLanguage
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales: string[] = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      document.documentElement.lang = locale
      return locale
    }
  }
  return "zh"
}

const i18n = createI18n({
  locale: getLocale(),
  messages
})
export default i18n