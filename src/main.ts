import { i18n } from '@/i18n'
import router from '@/router'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(MotionPlugin).use(i18n).use(router).mount('#app')
