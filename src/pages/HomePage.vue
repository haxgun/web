<script setup lang="ts">
import { Footer } from '@/components'
import { Contacts } from '@/components/contacts'
import { Verify } from '@/components/icons'
import { Twir, Valory } from '@/components/icons/logotypes'
import { Projects } from '@/components/projects'
import { GitHubContributions, LinkPreview, Photo } from '@/components/ui'
import { useProfileAnimation } from '@/composables/useProfileAnimation'
import { onMounted, ref } from 'vue'

const photoRef = ref<HTMLElement>()
const nameRef = ref<HTMLElement>()
const roleRef = ref<HTMLElement>()
const contactsRef = ref<HTMLElement>()
const descriptionRefs = ref<HTMLElement[]>([])
const githubRef = ref<HTMLElement>()
const projectsRef = ref<HTMLElement>()
const footerRef = ref<HTMLElement>()

const { animateProfile } = useProfileAnimation()

const setDescriptionRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    descriptionRefs.value[index] = el
  }
}

onMounted(() => {
  const elements = {
    photo: photoRef.value,
    name: nameRef.value,
    role: roleRef.value,
    contacts: contactsRef.value,
    descriptions: descriptionRefs.value.filter(Boolean),
    github: githubRef.value,
    projects: projectsRef.value,
    footer: footerRef.value,
  }

  animateProfile(elements)
})
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto h-dvh">
    <div class="h-full grow px-5 md:pt-16 flex flex-col justify-center">
      <div class="h-full flex flex-col gap-3">
        <div class="flex gap-4 items-center my-4">
          <div ref="photoRef">
            <Photo src="photo.jpg" />
          </div>
          <div class="flex flex-col gap-1 flex-1">
            <div
              ref="nameRef"
              class="inline-flex gap-1.5 items-center font-medium text-xl pointer-events-none text-[oklch(94.9%_0_0)]"
            >
              Миша Гусев
              <Verify class="text-white size-4" />
            </div>
            <div ref="roleRef" class="text-[oklch(77.3%_0_0)]">Full-stack разработчик</div>
            <div ref="contactsRef">
              <Contacts />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 text-[oklch(77.3%_0_0)]">
          <div :ref="(el) => setDescriptionRef(el, 0)">
            <strong class="font-medium text-[oklch(94.9%_0_0)]">Разработчик</strong>, который
            создаёт
            <strong class="font-medium text-[oklch(94.9%_0_0)]"> современные инструменты</strong>.
          </div>

          <div :ref="(el) => setDescriptionRef(el, 1)">
            В основном занимаюсь
            <strong class="font-medium text-[oklch(94.9%_0_0)]">бекендом</strong>.<br />
            Создаю
            <strong class="font-medium text-[oklch(94.9%_0_0)]">микросервисы и</strong>
            <LinkPreview
              url="https://core.telegram.org/bots/api"
              class="text-[#24A1DE] hover:bg-[#24A1DE]/15"
            >
              Telegram ботов
            </LinkPreview>
            с использованием
            <LinkPreview
              url="https://fastapi.tiangolo.com/"
              class="text-[#009485] hover:bg-[#009485]/15"
            >
              FastAPI
            </LinkPreview>
            и
            <LinkPreview
              url="https://github.com/aiogram/aiogram"
              class="text-[#24A1DE] hover:bg-[#24A1DE]/15"
            >
              aiogram
            </LinkPreview>
          </div>

          <div :ref="(el) => setDescriptionRef(el, 2)">
            Для
            <strong class="font-medium text-[oklch(94.9% 0 0)]">фронтенда</strong>
            использую
            <LinkPreview url="https://vite.dev/" class="text-[#F6C322] hover:bg-[#F6C322]/15">
              Vite </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/core"
              class="text-[#41B883] hover:bg-[#41B883]/15"
            >
              Vue 3 </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/pinia"
              class="text-[#ECB732] hover:bg-[#ECB732]/15"
            >
              Pinia </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/router"
              class="text-[#34495E] hover:bg-[#34495E]/15"
            >
              Vue Router </LinkPreview
            >,
            <LinkPreview
              url="https://tailwindcss.com/"
              class="text-[#38BDF8] hover:bg-[#38BDF8]/15"
            >
              TailwindCSS </LinkPreview
            >и
            <LinkPreview url="https://reka-ui.com/" class="text-[#30C196] hover:bg-[#30C196]/15">
              Reka UI
            </LinkPreview>
          </div>

          <div :ref="(el) => setDescriptionRef(el, 3)" class="flex flex-wrap items-center gap-1">
            В настоящее время работаю над
            <LinkPreview url="https://beta.valory.su" class="text-red-500 hover:bg-red-500/15">
              <Valory :size="19" />
              Valory
            </LinkPreview>
          </div>

          <div :ref="(el) => setDescriptionRef(el, 4)" class="flex flex-wrap items-center gap-1">
            Также занимаюсь контребьюцией в
            <LinkPreview url="https://twir.app/" class="text-[#4F69FD] hover:bg-[#4F69FD]/15">
              <Twir :size="19" />
              Twir
            </LinkPreview>
            и другие...
          </div>
        </div>

        <div ref="githubRef">
          <GitHubContributions username="haxgun" />
        </div>

        <div ref="projectsRef">
          <Projects />
        </div>
        <div ref="footerRef">
          <Footer />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  will-change: filter, transform, opacity;
}

[ref] {
  will-change: filter, transform, opacity;
}

:deep(.link-preview) {
  transition: background-color 0.2s ease;
}
</style>
