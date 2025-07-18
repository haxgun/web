import { i18n } from '@/i18n'
import router from '@/router'
import { VueUmamiPlugin } from '@jaseeey/vue-umami-plugin'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(
  VueUmamiPlugin({
    websiteID: '21f0ed0d-cbd8-4941-b353-3979c3cd53ed',
    scriptSrc: 'https://umami.valory.su/script.js',
    router,
    allowLocalhost: false,
  }),
)

app.use(pinia).use(MotionPlugin).use(i18n).use(router).mount('#app')
