// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 7777,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
          langs: ['typescript', 'vue', 'css', 'bash'],
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400] },
    ],
  },

  icon: {
    serverBundle: 'remote',
  },

  app: {
    baseURL: '/yurufuwaFE.dev/',
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'yurufuwaFE.dev',
      meta: [
        { name: 'description', content: 'ゆるふわフロントエンドエンジニアのポートフォリオ & ブログ' },
        { name: 'theme-color', content: '#FFFFFF' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
