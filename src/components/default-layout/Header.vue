<script setup lang="ts">
import { HeaderLinks } from '@/data/HeaderLinks.data'
import { ArrowRight } from 'lucide-vue-next'
import { motion } from 'motion-v'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const hoveredIndex = ref<number | null>(null)

const activeIndex = computed(() => {
  return HeaderLinks.findIndex((link) => link.name === route.name)
})

const backgroundStyle = computed(() => {
  const targetIndex = hoveredIndex.value !== null ? hoveredIndex.value : activeIndex.value

  if (targetIndex === -1) {
    return { y: 0, opacity: 0 }
  }

  const BUTTON_HEIGHT = 40

  return {
    y: targetIndex * BUTTON_HEIGHT,
    opacity: 1,
  }
})

function handleMouseEnter(index: number) {
  hoveredIndex.value = index
}

function handleMouseLeave() {
  hoveredIndex.value = null
}
</script>

<template>
  <header class="shrink-0 md:w-[220px] z-20 md:fixed top-5 left-5 bottom-0 h-fit backdrop-blur-sm">
    <div class="p-5 flex flex-col items-end bg-neutral-200/25 rounded-2xl">
      <div class="w-full font-medium text-sm -ml-3 flex md:flex-col relative">
        <motion.div
          tag="div"
          :initial="false"
          :animate="backgroundStyle"
          :transition="{
            type: 'spring',
            stiffness: 500,
            damping: 35,
            mass: 0.6,
          }"
          class="absolute h-8 md:h-10 bg-neutral-200/50 rounded-xl pointer-events-none"
          style="width: 100%; left: 0"
        />

        <a
          v-for="(link, index) in HeaderLinks"
          :key="link.name"
          @click="router.push({ name: link.name })"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          class="group rounded-xl flex justify-between px-3 md:px-5 gap-1 md:gap-2 h-8 md:h-10 items-center cursor-pointer capitalize leading-none relative z-10 transition-colors duration-200"
          :class="[
            route.name === link.name ? 'bg-neutral-200/50 ' : '',
            route.name === link.name || hoveredIndex === index ? 'text-zinc-700 ' : 'text-zinc-400',
          ]"
        >
          <span>{{ link.label }}</span>

          <motion.div
            tag="div"
            :initial="false"
            :animate="{
              opacity: route.name === link.name || hoveredIndex === index ? 1 : 0,
              scale: route.name === link.name || hoveredIndex === index ? 1 : 0.8,
            }"
            :transition="{ duration: 0.2, ease: 'easeInOut' }"
            class="size-3"
          >
            <ArrowRight class="size-3" />
          </motion.div>
        </a>
      </div>
    </div>
  </header>
</template>
