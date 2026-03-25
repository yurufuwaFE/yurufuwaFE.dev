<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <h2
    :id="id"
    class="group relative scroll-mt-24 border-l-4 border-brand-violet pl-4"
  >
    <slot />
    <a
      v-if="id"
      :href="`#${id}`"
      class="ml-2 text-brand-violet opacity-0 transition-opacity group-hover:opacity-100"
      aria-label="この見出しへのリンク"
    >
      #
    </a>
  </h2>
</template>
