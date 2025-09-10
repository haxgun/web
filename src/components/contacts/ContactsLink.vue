<script setup lang="ts">
import { type IContact } from '@/types/contacts.type'
const props = defineProps<IContact>()
</script>

<template>
  <a
    class="group text-[var(--color)] dark:text-[var(--dark-color)] hover:bg-[var(--color)]/5 hover:dark:bg-[var(--dark-color)]/5 w-fit cursor-pointer font-medium gap-2 py-px px-2 -ml-2 hover:rounded-sm transition-all inline-flex items-center"
    :href="props.url"
    :style="{ color: props.color }"
  >
    <component v-if="props.icon" :is="props.icon" class="size-4" />
    <span>{{ props.name }}</span>
  </a>
</template>
