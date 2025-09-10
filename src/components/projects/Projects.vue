<script setup lang="ts">
import { Section, SectionContent, SectionHeader } from '@/components/sections'
import { ProjectsData } from '@/data/Projects.data'
import { ProjectsLink } from '.'

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <Section>
    <SectionHeader>
      <span>Проекты</span>
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
