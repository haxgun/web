<script setup lang="ts">
import { Contacts } from '@/components/contacts'
import { NexusQX, Valory } from '@/components/icons/logotypes'
import { Projects } from '@/components/projects'
import { GitHubContributions, LinkPreview } from '@/components/ui'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto h-fit">
    <div class="grow px-5 md:pt-16 flex flex-col">
      <div class="size-full flex flex-col gap-6">
        <div class="font-semibold text-[2.25em] text-neutral-700">Миша Гусев</div>
        <div class="flex flex-col gap-4">
          <div class="text-neutral-500">
            Привет! Я <strong class="font-medium text-neutral-700">full-stack разработчик</strong>,
            который создаёт
            <strong class="font-medium text-neutral-700"> современные инструменты</strong>.
          </div>
          <div class="text-neutral-500">
            В основном занимаюсь <strong class="font-medium text-neutral-700">бекендом</strong>.
            Создаю
            <strong class="font-medium text-neutral-700">микросервисы, API и</strong>
            <LinkPreview
              url="https://core.telegram.org/bots/api"
              class="text-[#24A1DE] hover:bg-[#24A1DE]/5"
            >
              Telegram ботов
            </LinkPreview>
            с использованием
            <LinkPreview
              url="https://fastapi.tiangolo.com/"
              class="text-[#009485] hover:bg-[#009485]/5"
            >
              FastAPI
            </LinkPreview>
            и
            <LinkPreview
              url="https://github.com/aiogram/aiogram"
              class="text-[#24A1DE] hover:bg-[#24A1DE]/5"
            >
              aiogram
            </LinkPreview>
          </div>
          <div class="text-neutral-500">
            Для <strong class="font-medium text-neutral-700">фронтенда</strong> использую
            <LinkPreview url="https://vite.dev/" class="text-[#F6C322] hover:bg-[#F6C322]/5">
              Vite </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/core"
              class="text-[#41B883] hover:bg-[#41B883]/5"
            >
              Vue 3 </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/pinia"
              class="text-[#ECB732] hover:bg-[#ECB732]/5"
            >
              Pinia </LinkPreview
            >,
            <LinkPreview
              url="https://github.com/vuejs/router"
              class="text-[#34495E] hover:bg-[#34495E]/5"
            >
              Vue Router </LinkPreview
            >,
            <LinkPreview url="https://tailwindcss.com/" class="text-[#38BDF8] hover:bg-[#38BDF8]/5">
              TailwindCSS </LinkPreview
            >и
            <LinkPreview url="https://reka-ui.com/" class="text-[#30C196] hover:bg-[#30C196]/5">
              Reka UI
            </LinkPreview>
          </div>
          <div class="text-neutral-500 inline-flex items-center gap-1">
            В настоящее время работаю над
            <LinkPreview url="https://beta.valory.su" class="text-red-500 hover:bg-red-500/5">
              <Valory :size="19" />
              Valory
            </LinkPreview>
            и
            <LinkPreview
              url="https://github.com/NexusQX"
              class="text-[#176BD2] hover:bg-[#176BD2]/5"
            >
              <NexusQX :size="19" />
              NexusQX
            </LinkPreview>
          </div>
        </div>
        <GitHubContributions username="haxgun" />
        <Contacts />
        <Projects />
      </div>
    </div>
  </main>
</template>
