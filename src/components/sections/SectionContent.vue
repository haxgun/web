<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    variant?: 'inline' | 'vertical'
  }>(),
  {
    variant: 'vertical',
  },
)
</script>

<template>
  <div
    :class="cn('flex gap-2', props.variant === 'inline' ? 'items-center flex-wrap' : 'flex-col')"
  >
    <slot />
  </div>
</template>
