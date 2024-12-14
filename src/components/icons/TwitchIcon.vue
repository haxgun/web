<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '24',
  },
  color: {
    type: String,
    default: '#ffff',
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 54 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.1285 3.16589L5.1059 11.2321V43.4929H16.1836V49.5455H22.2314L28.2735 43.4929H37.3388L49.4285 31.399V3.16589H8.1285ZM12.1554 7.1964H45.3996V29.3785L38.3463 36.4372H27.2672L21.227 42.4816V36.4373H12.1554V7.1964ZM23.2375 27.3645H27.2672V15.2669H23.2375V27.3645ZM34.3176 27.3645H38.3465V15.2669H34.3176V27.3645Z"
      :fill="color"
    />
  </svg>
</template>

<style scoped></style>
