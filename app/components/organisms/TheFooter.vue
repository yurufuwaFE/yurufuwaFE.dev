<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="border-t border-surface-600 bg-surface-800">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <NuxtLink to="/" class="text-lg font-bold gradient-text">
          {{ appConfig.site.name }}
        </NuxtLink>

        <div class="flex gap-4">
          <SocialLink
            v-for="social in appConfig.social"
            :key="social.url"
            :icon="social.icon"
            :url="social.url"
            :label="social.label"
          />
        </div>
      </div>

      <div class="mt-8 text-center text-sm text-text-muted">
        &copy; {{ new Date().getFullYear() }} {{ appConfig.site.name }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
