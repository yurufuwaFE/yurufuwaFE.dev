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
    { icon: 'i-mdi-github', url: 'https://github.com/yurufuwaFE', label: 'GitHub' },
    { icon: 'i-mdi-twitter', url: 'https://x.com/yurufuwaFE', label: 'X (Twitter)' },
  ],
  skills: [
    { name: 'Vue.js', icon: 'i-logos-vue' },
    { name: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    { name: 'React', icon: 'i-logos-react' },
    { name: 'Next.js', icon: 'i-logos-nextjs-icon' },
    { name: 'Svelte', icon: 'i-logos-svelte-icon' },
    { name: 'SvelteKit', icon: 'i-logos-svelte-icon' },
    { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon' },
    { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
    { name: 'microCMS', icon: 'i-simple-icons-microdotblog' },
    { name: 'WordPress', icon: 'i-logos-wordpress-icon' },
    { name: 'Figma', icon: 'i-logos-figma' },
    { name: 'Adobe XD', icon: 'i-simple-icons-adobexd' },
    { name: 'GitHub Copilot', icon: 'i-simple-icons-githubcopilot' },
    { name: 'Devin', icon: 'i-mdi-robot-outline' },
    { name: 'Claude Code', icon: 'i-simple-icons-anthropic' },
    { name: 'Cursor', icon: 'i-simple-icons-cursor' },
  ],
})
