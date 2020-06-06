import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
  siteTitle: string
  author: string
  description?: string
  keywords?: string
  lang?: string
}

function SEO({ description, keywords, lang, title, siteTitle, author }: Props) {
  lang = lang ? lang : 'en'

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`${title} - ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
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
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
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
