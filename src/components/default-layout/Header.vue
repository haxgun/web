<script setup lang="ts">
import { ThemeSwitcher } from '@/components/ui'
import { HeaderLinks } from '@/data/HeaderLinks.data'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header
    class="shrink-0 md:w-[220px] z-20 md:fixed top-1/2 -translate-y-1/2 left-5 bottom-0 h-fit"
  >
    <div class="p-5 flex flex-col items-end">
      <div class="w-full font-medium text-sm -ml-3 flex md:flex-col relative">
        <RouterLink
          v-for="link in HeaderLinks"
          :key="link.name"
          :to="{ name: link.name }"
          class="group rounded-xl flex justify-between px-3 md:px-5 gap-1 md:gap-2 h-8 md:h-10 items-center cursor-pointer capitalize leading-none relative z-10 transition-colors duration-200"
          :class="[
            route.name === link.name
              ? 'bg-neutral-200/50 dark:bg-white text-zinc-700 dark:text-black'
              : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-white',
          ]"
        >
          <span>{{ link.label }}</span>
        </RouterLink>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>
