<script setup lang="ts">
const props = defineProps<{
  href?: string
  target?: string
}>()

const isExternal = computed(() => props.href?.startsWith('http'))
</script>

<template>
  <NuxtLink
    :href="href"
    :target="isExternal ? '_blank' : target"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="text-brand-violet underline underline-offset-2 transition-colors hover:text-brand-pink"
  >
    <slot />
    <Icon
      v-if="isExternal"
      name="i-mdi-open-in-new"
      class="ml-0.5 inline-block size-3.5 align-text-top"
    />
  </NuxtLink>
</template>
