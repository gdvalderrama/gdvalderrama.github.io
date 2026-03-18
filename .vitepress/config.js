import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guio Valderrama',
  description: 'Personal site of Guiomar Valderrama',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Pokemon', link: '/pokemon' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gdvalderrama' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/guiomarvalderrama/' },
      { icon: 'mastodon', link: 'https://medium.com/@gdvalderrama' }
    ],
    footer: {
      message: 'This is a Vue project that uses VitePress.',
      copyright: 'Built with ❤️ by Guio Valderrama'
    }
  },
  cleanUrls: true,
  ignoreDeadLinks: true
})
