<script setup lang="ts">
import { Contacts } from '@/components/contacts'
import { NexusQX, Valory } from '@/components/icons/logotypes'
import { LinkPreview } from '@/components/ui'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto h-dvh">
    <div class="grow md:px-5 md:pt-16 md:flex flex-col">
      <div class="size-full flex flex-col">
        <div class="font-semibold text-[2.25em] mt-2 mb-4 text-neutral-700">Миша Гусев</div>
        <div class="flex flex-col gap-4">
          <div class="text-neutral-500">
            Привет! Я <strong class="font-medium text-neutral-700">разработчик</strong>, который
            создаёт <strong class="font-medium text-neutral-700"> современные инструменты</strong>.
          </div>
          <div class="text-neutral-500">
            В основном занимаюсь <strong class="font-medium text-neutral-700">бекендом</strong>.
            Создаю
            <strong class="font-medium text-neutral-700">микросервисы, API и</strong>
            <LinkPreview
              url="https://github.com/aiogram/aiogram"
              class="text-[#24A1DE] hover:bg-[#24A1DE]/5"
            >
              Telegram ботов
            </LinkPreview>
            с использованием
            <LinkPreview
              url="https://github.com/fastapi/fastapi"
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
          <div class="text-neutral-500 inline-flex items-center gap-1">
            В настоящее время работаю над
            <LinkPreview
              url="https://github.com/ValoryLabs/Valory"
              class="text-red-500 hover:bg-red-500/5"
            >
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
        <div class="h-px bg-neutral-200 w-full my-8" />
        <Contacts />
        <!-- <ul class="inline-flex items-center gap-1">
          <li class="social-icon content-center">
            <a href="https://www.twitch.tv/magicxcmd" target="__blank">
              <Twitch />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://t.me/haxgun" target="__blank">
              <Telegram />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://github.com/haxgun" target="__blank">
              <Github />
            </a>
          </li>
          <li class="social-icon">
            <a href="/cv" target="__blank">
              <BookText />
            </a>
          </li>
        </ul> -->
      </div>
    </div>
  </main>
</template>
