import messages from '@intlify/unplugin-vue-i18n/messages'
import { useLocalStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'
import '@/assets/main.css'

type MessageSchema = typeof messages
type Locale = keyof MessageSchema

const locale = useLocalStorage<Locale>('cvLocale', 'ru')

export const i18n = createI18n<I18nOptions & { messages: MessageSchema }, Locale>({
  legacy: false,
  locale: locale.value,
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
})
