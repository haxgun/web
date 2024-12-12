import 'modern-normalize/modern-normalize.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import '@/assets/style.css'

import App from './App.vue'


const app = createApp(App)

app
  .use(MotionPlugin)
  .mount('#app')
