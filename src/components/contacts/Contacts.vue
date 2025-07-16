<script setup lang="ts">
import { ContactsData } from '@/data/Contact.data'
import ContactsLink from './ContactsLink.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="text-neutral-400 text-sm">Связь</div>
    <div class="flex flex-col gap-2">
      <ContactsLink
        v-for="contact in ContactsData"
        :key="contact.tag"
        :url="contact.url"
        :name="contact.name"
        :icon="contact.icon"
        :tag="contact.tag"
        :color="contact.color"
      />
    </div>
  </div>
</template>
