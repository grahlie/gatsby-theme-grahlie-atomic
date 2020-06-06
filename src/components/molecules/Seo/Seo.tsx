import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description: string | null
  keywords: string | null
  lang: string | null
  meta: object | null
  title: string | null
}

function SEO({ description, keywords, lang, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const parsedSiteTitle = site.siteMetadata.title
  const parsedDescripton = description
  const parsedKeywords = keywords
  const parsedAuthor = site.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`${title} - ${parsedSiteTitle}`}
      meta={[
        {
          name: `description`,
          content: parsedDescripton,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: parsedDescripton,
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
          content: parsedAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: parsedDescripton,
        },
        {
          name: 'keywords',
          content: parsedKeywords,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
        }
      ]}
    >
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  )
}

export default SEO
