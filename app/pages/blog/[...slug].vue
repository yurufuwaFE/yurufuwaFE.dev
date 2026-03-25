<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})

const route = useRoute()
const slugPath = computed(() => {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug.join('/') : slug
})

const { data: post } = await useAsyncData(`blog-${slugPath.value}`, () =>
  queryCollection('blog').path(`/blog/${slugPath.value}`).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'ページが見つかりません' })
}

useSeoMeta({
  title: `${post.value.title} - yurufuwaFE.dev`,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description,
})

const tocLinks = computed(() => post.value?.body?.toc?.links ?? [])
provide('tocLinks', tocLinks)
</script>

<template>
  <div v-if="post">
    <header class="mb-12">
      <div class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-brand-violet/10 px-3 py-1 text-xs font-medium text-brand-violet"
        >
          {{ tag }}
        </span>
      </div>
      <h1 class="mb-4 text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
        {{ post.title }}
      </h1>
      <p class="mb-3 text-lg text-text-secondary">
        {{ post.description }}
      </p>
      <time class="text-sm text-text-muted">{{ formatDate(post.date) }}</time>
    </header>

    <div class="prose prose-lg max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>
