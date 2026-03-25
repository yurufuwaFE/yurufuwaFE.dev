<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
  image?: string
}>()
</script>

<template>
  <NuxtLink
    :to="slug"
    class="group block overflow-hidden rounded-2xl bg-surface-900 border border-surface-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]"
  >
    <div v-if="image" class="aspect-video overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      >
    </div>
    <div class="p-6">
      <div class="mb-3 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-brand-violet/10 px-3 py-0.5 text-xs font-medium text-brand-violet"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="mb-2 text-lg font-bold text-text-primary transition-colors group-hover:text-brand-violet">
        {{ title }}
      </h3>
      <p class="mb-4 line-clamp-2 text-sm text-text-secondary">
        {{ description }}
      </p>
      <time class="text-xs text-text-muted">{{ formatDate(date) }}</time>
    </div>
  </NuxtLink>
</template>
