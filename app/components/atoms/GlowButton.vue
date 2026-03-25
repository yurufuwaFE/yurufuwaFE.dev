<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}>(), {
  type: 'button',
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group relative inline-flex items-center justify-center gap-2 rounded-full border border-brand-violet/50 px-8 py-3 font-semibold text-brand-violet transition-all duration-300 hover:border-brand-violet hover:bg-brand-violet/10"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="group relative inline-flex items-center justify-center gap-2 rounded-full border border-brand-violet/50 px-8 py-3 font-semibold text-brand-violet transition-all duration-300 hover:border-brand-violet hover:bg-brand-violet/10 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
