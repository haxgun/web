<script setup lang="ts">
import { Contacts } from '@/components/contacts'
import { Valory } from '@/components/icons/logotypes'
import { Projects } from '@/components/projects'
import { GitHubContributions, LinkPreview } from '@/components/ui'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto h-[calc(100vh-3rem)]">
    <div class="h-full grow px-5 md:pt-16 flex flex-col justify-center">
      <div class="flex flex-col gap-6">
        <div
          class="inline-flex gap-3 font-semibold text-[2.25em] pointer-events-none text-neutral-700 dark:text-white"
        >
          Миша Гусев
          <img src="/favicon.png" alt="Миша Гусев" class="w-12 h-12 mr-2" />
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-neutral-500 dark:text-neutral-300">
            Привет! Я
            <strong class="font-medium text-neutral-700 dark:text-white"
              >full-stack разработчик</strong
            >, который создаёт
            <strong class="font-medium text-neutral-700 dark:text-white">
              современные инструменты</strong
            >.
          </div>
          <div class="text-neutral-500 dark:text-neutral-200">
            В основном занимаюсь
            <strong class="font-medium text-neutral-700 dark:text-white">бекендом</strong>.<br />
            Создаю
            <strong class="font-medium text-neutral-700 dark:text-white"
              >микросервисы, API и</strong
            >
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
          <div class="text-neutral-500 dark:text-neutral-300">
            Для
            <strong class="font-medium text-neutral-700 dark:text-white">фронтенда</strong>
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
          <div class="text-neutral-500 dark:text-neutral-300 inline-flex items-center gap-1">
            В настоящее время работаю над
            <LinkPreview url="https://beta.valory.su" class="text-red-500 hover:bg-red-500/15">
              <Valory :size="19" />
              Valory
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
