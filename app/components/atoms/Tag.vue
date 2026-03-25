<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    class="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
    :class="[
      active
        ? 'bg-gradient-to-r from-brand-violet to-brand-cyan text-white'
        : 'bg-surface-700 text-text-secondary hover:text-text-primary hover:bg-surface-600 border border-surface-600',
    ]"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
