<script setup lang="ts">
import { type IContact } from '@/types/contacts.type'
const props = defineProps<IContact>()
</script>

<template>
  <a
    class="text-sm contact-link group hover:bg-[var(--color)]/15 w-fit cursor-pointer font-medium gap-1.5 py-1 px-2 -ml-2 hover:rounded-sm transition-all inline-flex items-center active:scale-95"
    :href="props.url"
    :style="{ color: props.color }"
  >
    <component v-if="props.icon" :is="props.icon" class="size-4 stroke-[2]" />
    <span>{{ props.name }}</span>
  </a>
</template>

<style scoped>
.contact-link {
  --color: v-bind(props.color);
}
</style>
