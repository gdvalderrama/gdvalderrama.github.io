// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Guio Valderrama',
  siteUrl: 'https://guiomar.xyz',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./blog/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-55840805-2'
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:title',
  },
}
