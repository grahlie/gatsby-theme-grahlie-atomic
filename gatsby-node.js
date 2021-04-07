const fs = require("fs")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = ({ reporter }) => {
  const srcFolder = 'src'
  const imageFolder = "images"

  if (!fs.existsSync(srcFolder)) {
    reporter.info(`creating the ${srcFolder} directory`)
    fs.mkdirSync(srcFolder)
  }
  
  if (!fs.existsSync(`${srcFolder}/${imageFolder}`)) {
    reporter.info(`creating the ${srcFolder}/${imageFolder} directory`)
    fs.mkdirSync(`${srcFolder}/${imageFolder}`)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const infoPageTemplate = require.resolve(`./src/components/templates/Infopage/Infopage.tsx`)
  const landingPageTemplate = require.resolve(`./src/components/templates/Landingpage/Landingpage.tsx`)

  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: node.fields.slug === 'home' ? landingPageTemplate : infoPageTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}