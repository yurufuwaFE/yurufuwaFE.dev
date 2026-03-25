<script setup lang="ts">
useSeoMeta({
  title: 'Blog - yurufuwaFE.dev',
  ogTitle: 'Blog - yurufuwaFE.dev',
  description: 'フロントエンド開発に関する技術記事',
  ogDescription: 'フロントエンド開発に関する技術記事',
})
</script>

<template>
  <div class="pt-28 pb-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Blog" subtitle="すべての記事" />
      <BlogGrid />
    </div>
  </div>
</template>
