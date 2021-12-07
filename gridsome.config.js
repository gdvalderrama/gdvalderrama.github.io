// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Guio Valderrama',
  siteUrl: 'https://guiomar.xyz/personal-site',
  pathPrefix: '/personal-site',
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
  ],
  templates: {
    BlogPost: '/personal-site/blog/:year/:month/:title',
  },
}
