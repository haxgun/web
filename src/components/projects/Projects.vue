<script setup lang="ts">
import { Section, SectionContent, SectionHeader } from '@/components/sections'
import { ProjectsData } from '@/data/Projects.data'
import { ArrowRight } from 'lucide-vue-next'
import ProjectsLink from './ProjectsLink.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProjects = () => {
  router.push('/projects')
}
</script>

<template>
  <Section>
    <SectionHeader>
      <span>Проекты</span>
      <span
        @click="navigateToProjects"
        class="hover:bg-[#38BDF8]/5 rounded-sm mt-0.5 px-1.5 cursor-pointer inline-flex text-[#38BDF8] gap-1.5 text-xs items-center"
        >Посмотреть <ArrowRight class="size-2"
      /></span>
    </SectionHeader>
    <SectionContent>
      <ProjectsLink
        v-for="project in ProjectsData"
        :key="project.title"
        :year="project.year"
        :link="project.link"
        :title="project.title"
        :short_description="project.short_description"
        :stage="project.stage"
      />
    </SectionContent>
  </Section>
</template>
