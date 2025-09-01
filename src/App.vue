<script setup lang="ts">
import { DefaultLayout } from '@/layouts'
import { useRoute } from 'vue-router'
// import { CustomCursor } from './components/ui'

const route = useRoute()
// import { useHead, useSeoMeta } from '@unhead/vue'

// useHead({
//   title: metaTitle,
//   titleTemplate: (title) => (title === metaTitle ? title : `${title} - ${titleMain}`),
//   meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
// })

// useSeoMeta({
//   title: metaTitle,
//   description: metaDescription,
//   viewport: 'width=device-width, initial-scale=1',
//   ogTitle: metaTitle,
//   ogDescription: metaDescription,
//   ogImage: metaImg,
//   twitterCard: 'summary_large_image',
//   twitterTitle: metaTitle,
//   twitterDescription: metaDescription,
//   twitterImage: metaImg,
//   author: 'MAGICX, misha@valory.su',
//   keywords: metaKeywords,
// })
//
</script>

<template>
  <div id="app">
    <!-- <CustomCursor /> -->
    <DefaultLayout>
      <router-view v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </Transition>
      </router-view>
    </DefaultLayout>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
