<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Skeleton } from '@/components/ui/skeleton'
import { useMetaExtractor } from '@/composables'
import { cn, openLink } from '@/lib/utils.ts'
import { BookIcon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'

interface Props {
  url: string
  text?: string
  showIcon?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
})

const { extractMetaFromUrl, loading, error } = useMetaExtractor()
const metaData = ref<any>(null)
const hasLoaded = ref(false)

const repoName = computed(() => {
  try {
    if (typeof window !== 'undefined' && window.URL) {
      const urlObj = new window.URL(props.url)
      return urlObj.pathname.split('/').filter(Boolean).join('/')
    } else {
      const match = props.url.match(/github\.com\/([^\/]+\/[^\/]+)/)
      return match ? match[1] : props.url
    }
  } catch {
    return props.url
  }
})

const handleMouseEnter = async () => {
  if (!hasLoaded.value && !loading.value) {
    hasLoaded.value = true
    metaData.value = await extractMetaFromUrl(props.url)
  }
}
</script>

<template>
  <HoverCard>
    <HoverCardTrigger @mouseenter="handleMouseEnter" as-child>
      <a
        :href="props.url"
        :class="
          cn(
            'cursor-pointer font-medium gap-1 py-px px-1 hover:bg-neutral-100/60 hover:rounded-sm transition-all inline-flex items-center active:scale-95',
            props.class,
          )
        "
      >
        <slot />
      </a>
    </HoverCardTrigger>

    <HoverCardContent class="w-80 rounded-lg p-4 border-neutral-800" side="top">
      <Transition name="fade" mode="out-in">
        <div v-if="loading || error" key="skeleton" class="flex flex-col gap-2">
          <Skeleton class="mb-4 aspect-[120/63] w-full rounded-md border object-cover" />
          <Skeleton class="line-clamp-1 h-5 w-full rounded-md border" />
          <Skeleton class="line-clamp-3 h-12 w-full rounded-md border" />
        </div>

        <div v-else-if="metaData" key="content" class="overflow-hidden">
          <div
            class="mb-4 aspect-[120/63] w-full rounded-md border border-neutral-800 object-cover"
          >
            <div
              v-if="!metaData.ogImage"
              class="h-full w-full rounded-md flex flex-col justify-center items-center"
            >
              <BookIcon class="size-6 text-[#e5e5e5]" />
            </div>
            <img
              v-else
              :src="metaData.ogImage"
              :alt="metaData.title"
              class="h-full w-full rounded-md object-cover"
              fetchpriority="high"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3
              @click="openLink(props.url)"
              class="cursor-pointer line-clamp-1 text-sm font-semibold text-white border-b border-dashed w-fit"
            >
              {{ metaData.title || repoName }}
            </h3>

            <p v-if="metaData.description" class="line-clamp-3 text-xs text-[#CECECE]">
              {{ metaData.description }}
            </p>
          </div>
        </div>
      </Transition>
    </HoverCardContent>
  </HoverCard>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
