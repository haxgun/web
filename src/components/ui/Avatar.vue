<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  url: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 128,
})
</script>

<template>
  <div :class="cn('avatar rounded-lg overflow-hidden')">
    <img :src="props.url" :alt="`Avatar of ${props.url}`" />
  </div>
</template>

<style scoped>
.avatar {
  width: v-bind('props.size + "px"');
  height: v-bind('props.size + "px"');
}
</style>
