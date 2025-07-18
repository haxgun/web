<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const appElement = document.getElementById('app')

  if (isDark.value) {
    appElement?.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    appElement?.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = savedTheme === 'dark' || (!savedTheme && systemDark)

  const appElement = document.getElementById('app')
  if (isDark.value) {
    appElement?.classList.add('dark')
  } else {
    appElement?.classList.remove('dark')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative mt-2 p-2 rounded-full w-fit mx-3 hover:bg-neutral-200/50 dark:hover:bg-gray-600 transition-colors duration-200"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SunIcon v-if="!isDark" class="size-5 text-yellow-500" />
    <MoonIcon v-else class="size-5 text-blue-400" />
  </button>
</template>
