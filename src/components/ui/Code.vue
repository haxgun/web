<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    language?: string
    code: string
  }>(),
  {
    language: 'autodetect',
  },
)
</script>

<template>
  <div class="code-highlight overflow-hidden border border-2">
    <code :language="props.language" :code="props.code" />
  </div>
</template>

<style>
.code-highlight {
  margin-bottom: 6px;

  code {
    background-color: #000000;
    color: #f8f8f2;
    font-family: 'Minecraft-text';
    font-size: 18px;
  }

  pre code.hljs {
    padding: 1rem 1.5rem;
  }
}
</style>
