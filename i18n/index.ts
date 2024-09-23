import en from './en'
import ru from './ru'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  globalInjection: true,
  messages: {
    ru,
    en
  }
}))