module.exports = {
  siteMetadata: {
    title: `CHANGE ME`,
    description: `DESCRIPTION TO CHANGE`,
    author: `@grahlie`,
    keywords: 'SEO KEYWORDS CHANGE ME, COMMA SEPERATED'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bolier`,
        short_name: `grahlie`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
