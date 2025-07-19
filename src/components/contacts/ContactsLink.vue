<script setup lang="ts">
import { type Contact } from '@/types/contacts'
// import { ArrowRight } from 'lucide-vue-next'
const props = defineProps<Contact>()
</script>

<template>
  <a
    class="group contact-url text-[var(--color)] dark:text-[var(--dark-color)] hover:bg-[var(--color)]/5 hover:dark:bg-[var(--dark-color)]/5 w-fit cursor-pointer font-medium gap-2 py-px px-2 -ml-2 hover:rounded-sm transition-all inline-flex items-center"
    :href="props.url"
  >
    <component v-if="props.icon" :is="props.icon" class="size-4" />
    <span>{{ props.name }}</span>
    <!-- <span class="text-[var(--color)]/40 dark:text-[var(--dark-color)]/40 text-sm">{{
      props.tag
    }}</span>
    <span
      class="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 inline-flex items-center gap-2"
    >
      <ArrowRight class="size-3" />
    </span> -->
  </a>
</template>

<style scoped>
.contact-url {
  --color: v-bind('props.color');
  --dark-color: v-bind('props.dark_color');
}
</style>
