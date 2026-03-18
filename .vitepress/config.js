import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guio Valderrama',
  description: 'Personal site of Guiomar Valderrama',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: '/favicon.png',
    siteTitle: false,
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Pokemon', link: '/pokemon' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gdvalderrama' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/guiomarvalderrama/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>'
        },
        link: 'https://medium.com/@gdvalderrama'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H15.02v-2.135H6.111v2.135zm.956-5.423l8.47 2.815.669-2.029-8.47-2.815-.669 2.029zm2.417-5.181l7.13 5.46 1.303-1.701-7.13-5.46-1.303 1.701zm4.19-4.304l5.122 7.371 1.889-1.313-5.122-7.371-1.889 1.313zM18.19 0l-1.49 1.583 3.65 3.443L21.84 3.44 18.19 0z"/></svg>'
        },
        link: 'https://stackoverflow.com/users/3325322/gdvalderrama'
      }
    ],
    footer: {
      message: 'This is a Vue project that uses VitePress.',
      copyright: 'Built with ❤️ by Guio Valderrama'
    }
  },
  cleanUrls: true,
  ignoreDeadLinks: true
})
