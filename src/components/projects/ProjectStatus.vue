<script setup lang="ts">
import { CheckCircleIcon, CircleCutIcon, XCircleIcon } from '@untitledui-icons/vue/line'
import { computed } from 'vue'

const props = defineProps<{
  stage: string
}>()

const icon = computed(() => {
  if (props.stage === 'In progress') return CircleCutIcon
  if (props.stage === 'Done') return CheckCircleIcon
  return XCircleIcon
})

const color = computed(() => {
  if (props.stage === 'In progress') return 'text-[#0285FF]'
  if (props.stage === 'Done') return 'text-[#30C196]'
  return 'text-neutral-400'
})
</script>

<template>
  <component :is="icon" class="size-4 stroke-[2]" :class="color" />
</template>
