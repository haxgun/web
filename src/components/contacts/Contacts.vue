<script setup lang="ts">
import { Section, SectionContent, SectionHeader } from '@/components/sections'
import { ContactsData } from '@/data/Contact.data'
import { FileUserIcon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { ContactsLink } from '.'

const router = useRouter()
</script>

<template>
  <Section>
    <SectionHeader>Связь</SectionHeader>
    <SectionContent variant="inline">
      <ContactsLink
        v-for="contact in ContactsData"
        :key="contact.tag"
        :url="contact.url"
        :name="contact.name"
        :icon="contact.icon"
        :tag="contact.tag"
        :color="contact.color"
      />
      <ContactsLink
        :url="router.resolve({ name: 'cv' }).href"
        name="Резюме"
        :icon="FileUserIcon"
        color="white"
      />
    </SectionContent>
  </Section>
</template>
