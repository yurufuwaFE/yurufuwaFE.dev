<script setup lang="ts">
defineProps<{
  code?: string
  language?: string
  filename?: string
}>()

const copied = ref(false)

async function copyCode() {
  if (!navigator.clipboard) return
  try {
    await navigator.clipboard.writeText(code ?? '')
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // ignore
  }
}
</script>

<template>
  <div class="group relative">
    <div v-if="filename || language" class="flex items-center justify-between rounded-t-xl border border-b-0 border-surface-600 bg-surface-700 px-4 py-2">
      <span class="text-xs text-text-muted">{{ filename || language }}</span>
    </div>
    <div class="relative">
      <button
        class="absolute right-3 top-3 rounded-lg bg-surface-600 p-1.5 text-text-muted opacity-0 transition-all hover:text-text-primary group-hover:opacity-100"
        aria-label="コードをコピー"
        @click="copyCode"
      >
        <Icon :name="copied ? 'i-mdi-check' : 'i-mdi-content-copy'" class="size-4" />
      </button>
      <pre
        class="overflow-x-auto rounded-xl border border-surface-600 bg-surface-700 p-4"
        :class="(filename || language) && '!rounded-t-none !border-t-0'"
      ><slot /></pre>
    </div>
  </div>
</template>
