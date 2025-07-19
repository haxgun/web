<script setup lang="ts">
import { ProjectStatus } from '@/components/projects'
import { ProjectsData } from '@/data/Projects.data'
import { openLink } from '@/lib/utils'
import { ChevronRightIcon } from 'lucide-vue-next'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto">
    <div class="grow px-5 md:pt-16 flex flex-col">
      <div class="size-full flex flex-col gap-6">
        <div class="font-semibold text-center text-[2.25em] text-neutral-700 dark:text-white">
          Проекты
        </div>
        <div class="flex flex-col gap-10 w-full">
          <div
            @click="project.link && openLink(project.link)"
            v-for="project in ProjectsData"
            :key="project.title"
            class="group cursor-pointer relative w-full h-[405px] dark:bg-neutral-900 border-1 border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center overflow-hidden flex-col gap-5"
          >
            <div class="flex mt-8 flex-col gap-2.5 items-center">
              <span class="absolute top-5 right-5 inline-flex items-center gap-2">
                <ProjectStatus :stage="project.stage" />
                <span class="text-neutral-500 text-sm">{{ project.stage }}</span>
              </span>
              <div class="inline-flex text-zinc-400 font-medium text-sm items-center gap-2">
                <span>{{ project.title }}</span>
                <span class="size-[3px] bg-zinc-400 rounded-full" />
                <span>{{ project.year }}</span>
              </div>
              <div class="font-medium text-xl">{{ project.short_description }}</div>
              <div
                class="inline-flex scale-100 group-hover:scale-105 ease-out transition-transform items-center text-[#166BD2] gap-1 font-medium"
              >
                <span class="text-sm">Посмотреть проект</span>
                <ChevronRightIcon class="size-3" />
              </div>
            </div>
            <div
              class="absolute -bottom-36 left-1/2 -translate-x-1/2 scale-70 ease-out group-hover:scale-[72%] transition-transform w-3xl rounded-3xl p-3 shadow-2xl overflow-hidden"
              :style="{
                backgroundColor: `${project.color}33`,
              }"
            >
              <div
                class="w-full h-full aspect-video bg-cover bg-center rounded-2xl"
                :style="{ backgroundImage: `url(${project.preview})` }"
                :aria-label="`Project Preview ${project.title}`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
