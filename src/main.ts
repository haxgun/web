import 'modern-normalize/modern-normalize.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { i18n } from '@/i18n'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

app
  .use(MotionPlugin)
  .use(i18n)
  .use(router)
  .mount('#app')
