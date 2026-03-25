<script setup lang="ts">
const { data: posts } = await useAsyncData('latestBlog', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Blog" subtitle="最新の記事" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :tags="post.tags"
          :slug="post.path"
          :image="post.image"
        />
      </div>

      <div class="mt-12 text-center">
        <GlowButton to="/blog" variant="outline">すべての記事を見る</GlowButton>
      </div>
    </div>
  </section>
</template>
