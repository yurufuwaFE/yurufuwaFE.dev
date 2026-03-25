<script setup lang="ts">
const { data: posts } = await useAsyncData('allBlog', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

const selectedTag = ref<string | null>(null)

const allTags = computed(() => {
  if (!posts.value) return []
  const tags = new Set<string>()
  posts.value.forEach((post) => post.tags?.forEach((tag: string) => tags.add(tag)))
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedTag.value) return posts.value
  return posts.value.filter((post) => post.tags?.includes(selectedTag.value!))
})

function toggleTag(tag: string) {
  selectedTag.value = selectedTag.value === tag ? null : tag
}
</script>

<template>
  <div>
    <div class="mb-8 flex flex-wrap gap-2">
      <Tag
        label="All"
        :active="!selectedTag"
        @click="selectedTag = null"
      />
      <Tag
        v-for="tag in allTags"
        :key="tag"
        :label="tag"
        :active="selectedTag === tag"
        @click="toggleTag(tag)"
      />
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :tags="post.tags"
        :slug="post.path"
        :image="post.image"
      />
    </div>

    <p v-if="filteredPosts.length === 0" class="py-12 text-center text-text-muted">
      記事が見つかりませんでした。
    </p>
  </div>
</template>
