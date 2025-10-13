<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFavicon, usePreferredDark } from '@vueuse/core'

const route = useRoute()

const isDark = usePreferredDark()
const favicon = computed(() => isDark.value ? '/logo.svg' : '/logo_dark.svg')

onMounted(() => {
  useFavicon(favicon)
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
