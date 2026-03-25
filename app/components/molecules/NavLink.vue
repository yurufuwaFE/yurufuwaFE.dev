<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
    active-class="!text-text-primary"
  >
    {{ label }}
    <span
      class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-violet to-brand-cyan transition-all duration-300 group-hover:w-full"
    />
  </NuxtLink>
</template>
