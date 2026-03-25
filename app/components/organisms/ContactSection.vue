<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    })
    isSubmitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    alert('送信に失敗しました。もう一度お試しください。')
  } finally {
    isSubmitting.value = false
  }
}

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-24 bg-surface-800">
    <div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Contact" subtitle="お気軽にどうぞ" />

      <div v-if="isSubmitted" class="rounded-2xl bg-surface-700 border border-surface-600 p-8 text-center">
        <Icon name="i-mdi-check-circle" class="mb-4 size-12 text-green-400" />
        <p class="text-lg font-medium text-text-primary">送信ありがとうございます！</p>
        <p class="mt-2 text-text-secondary">できるだけ早くお返事します。</p>
      </div>

      <form v-else class="space-y-6" @submit.prevent="handleSubmit">
        <ContactField
          v-model="form.name"
          label="お名前"
          :required="true"
        />
        <ContactField
          v-model="form.email"
          label="メールアドレス"
          type="email"
          :required="true"
        />
        <ContactField
          v-model="form.message"
          label="メッセージ"
          type="textarea"
          :required="true"
        />
        <div class="text-center">
          <GlowButton type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? '送信中...' : '送信する' }}
          </GlowButton>
        </div>
      </form>
    </div>
  </section>
</template>
