<script setup lang="ts">
const appConfig = useAppConfig()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full transition-all duration-300"
    :class="isScrolled ? 'glass shadow-lg' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="text-xl font-bold gradient-text">
        {{ appConfig.site.name }}
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <NavLink
          v-for="item in appConfig.nav"
          :key="item.to"
          :to="item.to"
          :label="item.label"
        />
      </nav>

      <button
        class="relative z-50 size-8 md:hidden"
        aria-label="メニューを開く"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 bg-text-primary transition-all duration-300" :class="isMobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'" />
        <span class="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 bg-text-primary transition-all duration-300" :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'" />
        <span class="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 bg-text-primary transition-all duration-300" :class="isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'" />
      </button>
    </div>

    <MobileMenu :open="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>
