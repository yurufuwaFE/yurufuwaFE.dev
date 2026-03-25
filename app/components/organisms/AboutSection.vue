<script setup lang="ts">
const appConfig = useAppConfig()
const sectionRef = ref<HTMLElement | null>(null)

useScrollAnimation(sectionRef)
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 bg-surface-800">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="About" subtitle="ゆるふわフロントエンドエンジニア" />

      <div class="mb-12 mx-auto max-w-2xl text-center text-text-secondary leading-relaxed">
        <p class="mb-4">
          モダンなフロントエンド技術を使って、美しくてパフォーマンスの高いWebアプリケーションを作ることが好きです。
        </p>
        <p>
          Vue.js / Nuxt と React / Next.js をメインに、TypeScript と Tailwind CSS で型安全かつスタイリッシュな開発を心がけています。
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <SkillBadge
          v-for="skill in appConfig.skills"
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
        />
      </div>
    </div>
  </section>
</template>
