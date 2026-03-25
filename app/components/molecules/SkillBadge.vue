<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <div
    class="flex items-center gap-3 rounded-xl bg-surface-800 border border-surface-600 px-4 py-3 transition-all duration-200 hover:bg-surface-700 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
  >
    <Icon :name="icon" class="size-6" />
    <span class="text-sm font-medium text-text-primary">{{ name }}</span>
  </div>
</template>
