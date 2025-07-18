<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-vue-next'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

const getThemeLabel = () => {
  switch (themeStore.currentTheme) {
    case 'light':
      return 'Switch to dark mode'
    case 'dark':
      return 'Switch to system mode'
    case 'system':
      return 'Switch to light mode'
  }
}

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="group relative mt-2 p-2 rounded-full w-fit mx-3 hover:bg-neutral-200/50 dark:hover:bg-white transition-colors duration-200"
    :aria-label="getThemeLabel()"
  >
    <SunIcon v-if="themeStore.currentTheme === 'light'" class="size-5 text-yellow-500" />
    <MoonIcon v-else-if="themeStore.currentTheme === 'dark'" class="size-5 text-blue-400" />
    <MonitorIcon
      v-else
      class="size-5 dark:text-white dark:group-hover:text-black text-black group-hover:text-white transition-colors"
    />
  </button>
</template>
