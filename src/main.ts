import { i18n } from '@/i18n'
import router from '@/router'
import { VueUmamiPlugin } from '@jaseeey/vue-umami-plugin'
import { ForesightManager } from 'js.foresight'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'

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

ForesightManager.initialize({
  enableMousePrediction: true,
  trajectoryPredictionTime: 120,
  positionHistorySize: 8,
  defaultHitSlop: {
    top: 30,
    left: 30,
    bottom: 30,
    right: 30,
  },
  touchDeviceStrategy: 'viewport',
  enableScrollPrediction: true,
})

app.use(pinia).use(i18n).use(router).mount('#app')
