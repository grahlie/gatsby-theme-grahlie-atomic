module.exports = {
  siteMetadata: {
    title: `COMPANY NAME`,
    description: `DESCRIPTION TO CHANGE`,
    author: `@grahlie`,
    keywords: "SEO KEYWORDS CHANGE ME, COMMA SEPERATED",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bolier`,
        short_name: `grahlie`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
