import Cookies from 'js-cookie'

const languageKey = 'language'
export const getLanguage = (): string => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)
