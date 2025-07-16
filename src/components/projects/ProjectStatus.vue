<script setup lang="ts">
import { CircleCheckBigIcon, CircleDashedIcon, CircleXIcon } from 'lucide-vue-next'

const props = defineProps<{
  stage: string
}>()
</script>

<template>
  <CircleDashedIcon v-if="props.stage === 'In progress'" class="size-3.5 text-[#0285FF]" />
  <CircleCheckBigIcon v-else-if="props.stage === 'Done'" class="size-3.5 text-[#30C196]" />
  <CircleXIcon v-else class="size-3.5 text-neutral-400" />
</template>
