<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFavicon } from './composables'

const route = useRoute()

const colorMode = useColorMode()
const { updateFavicon } = useFavicon()

watch(
  () => colorMode.value,
  () => {
    updateFavicon()
  },
  { immediate: true },
)

onMounted(() => {
  updateFavicon()
})
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <Transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
