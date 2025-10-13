<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

interface Props {
  videoSrc: string
  image: string
  videoType?: string
}

const props = withDefaults(defineProps<Props>(), {
  videoType: 'video/mp4'
})

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <div class="video-background relative geist flex flex-col items-center justify-center h-dvh w-dvw overflow-hidden">
    <video v-if="!isMobile"
      class="absolute -z-1 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      autoplay muted loop playsinline :poster="props.image">
      <source :src="videoSrc" :type="videoType">
    </video>

    <div v-else class="absolute -z-1 bg-[url('/minecraft/background.png')] bg-cover h-dvh w-dvw"
      :style="{ backgroundImage: `url(${props.image})` }" />

    <div class="isolate relative z-1 h-full flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>
