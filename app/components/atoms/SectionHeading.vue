<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-12 text-center">
    <div class="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan" />
    <h2 class="text-3xl font-bold text-text-primary sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-lg text-text-secondary">
      {{ subtitle }}
    </p>
  </div>
</template>
