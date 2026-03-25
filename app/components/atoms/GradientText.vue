<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  animate?: boolean
}>(), {
  as: 'span',
  animate: false,
})
</script>

<template>
  <component
    :is="as"
    class="gradient-text-component"
    :class="animate && 'gradient-text-animated'"
  >
    <slot />
  </component>
</template>

<style scoped>
.gradient-text-component {
  background: linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-animated {
  background: linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4, #3B82F6, #7C3AED);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
