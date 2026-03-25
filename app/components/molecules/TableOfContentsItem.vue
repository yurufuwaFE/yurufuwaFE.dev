<script setup lang="ts">
defineProps<{
  id: string
  text: string
  depth: number
  active?: boolean
}>()
</script>

<template>
  <a
    :href="`#${id}`"
    class="block border-l-2 py-1.5 text-sm transition-all duration-200"
    :class="[
      active
        ? 'border-brand-violet text-brand-violet'
        : 'border-transparent text-text-muted hover:border-surface-600 hover:text-text-secondary',
    ]"
    :style="{ paddingLeft: `${(depth - 2) * 12 + 16}px` }"
  >
    {{ text }}
  </a>
</template>
