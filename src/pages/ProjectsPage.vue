<script setup lang="ts">
import { ProjectStatus } from '@/components/projects'
import { ProjectsData } from '@/data/Projects.data'
</script>

<template>
  <main class="max-w-screen-md z-10 antialiased w-full mx-auto">
    <div class="grow px-5 md:pt-16 flex flex-col">
      <div class="size-full flex flex-col gap-6">
        <div class="font-semibold text-[2.25em] text-neutral-700 dark:text-white">Проекты</div>
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div
            v-for="project in ProjectsData"
            :key="project.title"
            class="w-full bg-neutral-100/50 rounded-lg p-5 flex flex-col gap-2"
          >
            <div class="inline-flex items-center justify-between w-full">
              <span class="inline-flex gap-2 items-center">
                <component :is="project.icon" :style="{ color: project.color }" />
                <span>{{ project.title }}</span>
              </span>
              <span class="inline-flex items-center gap-2">
                <ProjectStatus :stage="project.stage" />
                <span class="text-neutral-500 text-sm">{{ project.stage }}</span>
              </span>
            </div>
            <div>{{ project.description }}</div>
            <img
              class="rounded-md"
              :src="project.preview"
              :alt="`Project Preview ${project.title}`"
            />
            <div class="inline-flex flex-wrap gap-1 items-center">
              <span
                class="bg-neutral-200 px-2 text-sm rounded-full"
                v-for="dependency in project.dependencies"
                :key="dependency"
                >{{ dependency }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
