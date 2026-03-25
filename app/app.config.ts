export default defineAppConfig({
  site: {
    name: 'yurufuwaFE.dev',
    title: 'yurufuwaFE.dev',
    description: 'ゆるふわフロントエンドエンジニアのポートフォリオ & ブログ',
    author: 'yurufuwaFE',
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
  ],
  social: [
    { icon: 'i-mdi-github', url: 'https://github.com/', label: 'GitHub' },
    { icon: 'i-mdi-twitter', url: 'https://x.com/', label: 'X (Twitter)' },
  ],
  skills: [
    { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
    { name: 'Vue.js', icon: 'i-logos-vue' },
    { name: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    { name: 'React', icon: 'i-logos-react' },
    { name: 'Next.js', icon: 'i-logos-nextjs-icon' },
    { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon' },
    { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
    { name: 'AWS', icon: 'i-logos-aws' },
  ],
})
