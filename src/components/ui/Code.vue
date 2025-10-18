<script setup lang="ts">
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/lib/common'
import 'highlight.js/styles/base16/classic-dark.css'

const highlightjs = hljsVuePlugin.component

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
    <highlightjs :language="props.language" :code="props.code" />
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
