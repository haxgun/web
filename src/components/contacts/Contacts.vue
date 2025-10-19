<script setup lang="ts">
import { Section, SectionContent } from '@/components/sections'
import { ContactsData } from '@/data/Contact.data'
import { Certificate01Icon } from '@untitledui-icons/vue/line'
import { ContactsLink } from '.'

const resumeLink = '/cv/'
</script>

<template>
  <Section>
    <SectionContent variant="inline">
      <ContactsLink
        :url="resumeLink"
        name="Резюме"
        :icon="Certificate01Icon"
        color="#F6C322"
      />
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
