<script setup lang="ts">
defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const appConfig = useAppConfig()
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl md:hidden">
      <nav class="flex flex-col items-center gap-8">
        <NuxtLink
          v-for="item in appConfig.nav"
          :key="item.to"
          :to="item.to"
          class="text-2xl font-bold text-text-primary transition-colors hover:text-brand-violet"
          @click="emit('close')"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="mt-12 flex gap-4">
        <SocialLink
          v-for="social in appConfig.social"
          :key="social.url"
          :icon="social.icon"
          :url="social.url"
          :label="social.label"
        />
      </div>
    </div>
  </Transition>
</template>
