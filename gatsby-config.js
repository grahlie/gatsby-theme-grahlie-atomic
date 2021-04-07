module.exports = 
  ({
    title = `COMPANY NAME`,
    author = `@grahlie`,
    contact = {
      email: 'INFO@EXAMPLECOMPANY.COM',
      phone: '+461253252345',
      address: 'EXAMPLE STREET',
      orgnr: 'ORG NUMBER'
    },
    fontFamily = `Open Sans`,
    fontSizes = [400, 700]
  }) => ({
    siteMetadata: {
      title,
      author,
      contact
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-feed-mdx`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content/pages`,
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
              family: fontFamily,
              variants: fontSizes
            },
          ],
        },
      }
    ],
  })
