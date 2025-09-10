<script setup lang="ts">
import type { IProject } from '@/types/projects.type'
import { ProjectStatus } from '.'
const props = defineProps<IProject>()
</script>

<template>
  <a
    class="group contact-url w-fit cursor-pointer gap-3 py-px px-2 -ml-2 hover:rounded-sm transition-all inline-flex items-center"
    :href="props.link"
  >
    <span class="inline-flex items-center gap-2">
      <ProjectStatus v-if="props.stage" :stage="props.stage" />
      <span class="font-base text-neutral-400">{{ props.year }}</span>
    </span>

    <span class="font-medium text-neutral-600 dark:text-white">{{ props.title }}</span>
    <span class="text-neutral-400 text-sm">{{ props.short_description }}</span>
  </a>
</template>
