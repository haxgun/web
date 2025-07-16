<script setup lang="ts">
import { Section, SectionContent, SectionHeader } from '@/components/sections'
import { ContactsData } from '@/data/Contact.data'
import ContactsLink from './ContactsLink.vue'
</script>

<template>
  <Section>
    <SectionHeader>Связь</SectionHeader>
    <SectionContent>
      <ContactsLink
        v-for="contact in ContactsData"
        :key="contact.tag"
        :url="contact.url"
        :name="contact.name"
        :icon="contact.icon"
        :tag="contact.tag"
        :color="contact.color"
      />
    </SectionContent>
  </Section>
</template>
