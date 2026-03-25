<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  type?: 'text' | 'email' | 'textarea'
  required?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isFocused = ref(false)
const hasValue = computed(() => props.modelValue.length > 0)
const isFloating = computed(() => isFocused.value || hasValue.value)
</script>

<template>
  <div class="group relative">
    <label
      class="pointer-events-none absolute left-4 transition-all duration-200"
      :class="[
        isFloating
          ? 'top-1 text-xs text-brand-violet'
          : 'top-3.5 text-sm text-text-muted',
      ]"
    >
      {{ label }}
    </label>
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :type="type !== 'textarea' ? (type || 'text') : undefined"
      :value="modelValue"
      :required="required"
      :rows="type === 'textarea' ? 5 : undefined"
      class="w-full rounded-xl border border-surface-600 bg-surface-900 px-4 pt-5 pb-2 text-text-primary outline-none transition-all duration-200 focus:border-brand-violet focus:shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>
