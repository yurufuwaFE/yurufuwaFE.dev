<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
    <h1 class="text-8xl font-bold gradient-text mb-4">
      {{ error.statusCode }}
    </h1>
    <p class="text-xl text-text-secondary mb-8">
      {{ error.statusCode === 404 ? 'ページが見つかりませんでした' : 'エラーが発生しました' }}
    </p>
    <button
      class="rounded-full border border-brand-violet/50 px-8 py-3 font-semibold text-brand-violet transition-all duration-300 hover:border-brand-violet hover:bg-brand-violet/10"
      @click="handleClearError"
    >
      ホームに戻る
    </button>
  </div>
</template>
