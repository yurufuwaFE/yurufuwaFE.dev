<script setup lang="ts">
const { displayText } = useTypingEffect([
  'Vue.js / Nuxt',
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
])
</script>

<template>
  <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-bg absolute inset-0" aria-hidden="true" />

    <div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
      <p class="hero-fade-in hero-delay-1 mb-4 text-sm font-medium tracking-widest text-brand-violet uppercase">
        Frontend Developer
      </p>

      <h1 class="hero-fade-in hero-delay-2 mb-6 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
        Hi, I'm
        <GradientText as="span" :animate="true">yurufuwaFE</GradientText>
      </h1>

      <p class="hero-fade-in hero-delay-3 mb-2 text-xl text-text-secondary sm:text-2xl">
        ゆるふわに、でも本気でつくる。
      </p>

      <p class="hero-fade-in hero-delay-4 mb-10 h-8 font-mono text-lg text-brand-cyan">
        {{ displayText }}<span class="animate-pulse">|</span>
      </p>

      <div class="hero-fade-in hero-delay-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <GlowButton to="/blog">Blog を読む</GlowButton>
        <GlowButton to="/#contact" variant="outline">お問い合わせ</GlowButton>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="i-mdi-chevron-down" class="size-6 text-text-muted" />
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  background:
    radial-gradient(ellipse 60% 50% at 20% 60%, rgba(124, 58, 237, 0.1) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 80% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 50% 80%, rgba(236, 72, 153, 0.07) 0%, transparent 70%);
}

.hero-fade-in {
  animation: heroFadeIn 0.8s ease-out both;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-delay-1 { animation-delay: 0.2s; }
.hero-delay-2 { animation-delay: 0.4s; }
.hero-delay-3 { animation-delay: 0.6s; }
.hero-delay-4 { animation-delay: 0.8s; }
.hero-delay-5 { animation-delay: 1.0s; }
</style>
