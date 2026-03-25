<script setup lang="ts">
defineProps<{
  links: Array<{ id: string; text: string; depth: number }>
}>()

const activeId = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-80px 0px -80% 0px' },
  )

  document.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
    observer.observe(heading)
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <nav v-if="links?.length" aria-label="目次">
    <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
      目次
    </p>
    <TableOfContentsItem
      v-for="link in links"
      :key="link.id"
      :id="link.id"
      :text="link.text"
      :depth="link.depth"
      :active="activeId === link.id"
    />
  </nav>
</template>
