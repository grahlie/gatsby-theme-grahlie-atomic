module.exports = {
  siteMetadata: {
    title: `COMPANY NAME`,
    description: `DESCRIPTION TO CHANGE`,
    author: `@grahlie`,
    keywords: "SEO KEYWORDS CHANGE ME, COMMA SEPERATED",
    contact: {
      email: 'INFO@EXAMPLECOMPANY.COM',
      phone: '+461253252345',
      address: 'EXAMPLE STREET',
      orgnr: 'ORG NUMBER'
    }
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
        name: `@grahlie/gatsby-theme-grahlie-atomic`,
        short_name: `grahlie`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
}
