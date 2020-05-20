import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
    description: string,
    keywords: string,
    lang: string,
    meta: object,
    title: string
}

function SEO({ description, keywords, lang, meta, title } : Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || `
    Some Keywords, comma separated
  `;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: metaKeywords,
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
        },
      ].concat(meta)}
    >
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  )
}

export default SEO
