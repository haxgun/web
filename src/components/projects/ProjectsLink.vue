<script setup lang="ts">
import { type Project } from '@/types/projects'
import { ArrowRight } from 'lucide-vue-next'
const props = defineProps<Project>()
</script>

<template>
  <a
    class="group contact-url w-fit cursor-pointer gap-3 py-px px-2 -ml-2 hover:rounded-sm transition-all inline-flex items-center"
    :href="props.link"
  >
    <component v-if="props.stage" :is="" class="size-4" />
    <span class="font-base text-neutral-400">{{ props.year }}</span>
    <span class="font-medium text-neutral-600">{{ props.title }}</span>
    <span class="text-neutral-400 text-sm">{{ props.short_description }}</span>
  </a>
</template>
