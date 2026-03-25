<script setup lang="ts">
const tocLinks = inject<Ref<Array<{ id: string; text: string; depth: number }>>>('tocLinks', ref([]))
</script>

<template>
  <div>
    <TheHeader />
    <main class="pt-24 pb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          <article>
            <slot />
          </article>
          <aside class="hidden lg:block">
            <div class="sticky top-28">
              <TableOfContents :links="tocLinks" />
            </div>
          </aside>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>
