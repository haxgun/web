<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const cursorDot = ref<HTMLElement>()
const isHovering = ref(false)

let mouseX = 0
let mouseY = 0

function updateCursor() {
  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`
  }
}

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
  updateCursor()
}

onMounted(() => {
  document.body.style.cursor = 'none'
  document.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  document.body.style.cursor = 'auto'
  document.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-50">
    <div
      ref="cursorDot"
      class="absolute size-4 rounded-full border-2 bg-transparent border-neutral-500/80 transition-all duration-150 ease-out"
    />
  </div>
</template>

<style>
* {
  cursor: none !important;
}
</style>
