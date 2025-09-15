<script setup lang="ts">
const props = defineProps({
  src: String,
})
</script>

<template>
  <img
    :src="props.src"
    class="inline-block size-24 mb-4 rounded-xl object-cover saturate-0 contrast-110 border border-white/5 hover:size-48 hover:saturate-100 hover:contrast-100 hover:rounded-2xl duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
  />
</template>
