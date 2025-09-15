<script setup lang="ts">
import { Contacts } from '@/components/contacts'
import { Verify } from '@/components/icons'
import { Valory } from '@/components/icons/logotypes'
import { Projects } from '@/components/projects'
import { GitHubContributions, LinkPreview, Photo } from '@/components/ui'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto h-[calc(100vh-3rem)]">
    <div class="h-full grow px-5 md:pt-16 flex flex-col justify-center">
      <div class="flex flex-col gap-3">
        <div class="flex gap-4 items-center mb-4">
          <Photo src="photo.jpg" />
          <div class="flex flex-col gap-1">
            <div
              class="inline-flex gap-1.5 items-center font-medium text-xl pointer-events-none text-[oklch(94.9%_0_0)]"
            >
              Миша Гусев
              <Verify class="text-white size-4" />
            </div>
            <div class="text-[oklch(77.3%_0_0)]">Full-stack разработчик</div>
            <Contacts />
          </div>
        </div>

        <div class="flex flex-col gap-3 text-[oklch(77.3%_0_0)]">
          <div>
            <strong class="font-medium text-[oklch(94.9%_0_0)]">Разработчик</strong>, который
            создаёт
            <strong class="font-medium text-[oklch(94.9%_0_0)]"> современные инструменты</strong>.
          </div>
          <div>
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
          <div>
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
          <div class="inline-flex items-center gap-1">
            В настоящее время работаю над
            <LinkPreview url="https://beta.valory.su" class="text-red-500 hover:bg-red-500/15">
              <Valory :size="19" />
              Valory
            </LinkPreview>
          </div>
        </div>
        <GitHubContributions username="haxgun" />
        <Projects />
      </div>
    </div>
  </main>
</template>
