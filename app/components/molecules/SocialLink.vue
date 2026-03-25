<script setup lang="ts">
defineProps<{
  icon: string
  url: string
  label: string
}>()
</script>

<template>
  <a
    :href="url"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center rounded-full p-2 text-text-secondary transition-all duration-200 hover:scale-110 hover:text-brand-violet"
  >
    <Icon :name="icon" class="size-5" />
  </a>
</template>
