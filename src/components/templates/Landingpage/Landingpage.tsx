import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../../organisms/Header'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import SEO from '../../molecules/Seo'
import '../normalize.css'

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string
      },
      body: string
    },
    site: {
      title: string,
      siteMetadata: {
        title: string,
        author: string,
        contact: {
          email: string
          phone: string
          address: string
          orgnr: string
        }
      }
    },
    placeholderImage: {
      childImageSharp:{
        fluid: FluidObject
      }
    }
  }
}

export default function Template({ data } : Props) {
  const { mdx, site, placeholderImage } = data
  const { frontmatter, body } = mdx

  // TODO: Fetch from pages folder
  const links = [{ href: '/', title: 'Home' }]
  
  return (
    <>
      <SEO 
        title={frontmatter.title}
        siteTitle={site.siteMetadata.title}
        author={site.siteMetadata.author}
      />
      <Header
        siteTitle={site.siteMetadata.title}
        logotype={placeholderImage.childImageSharp.fluid}
        links={links}
      />
      <Content>
        <MDXRenderer>{body}</MDXRenderer>
      </Content>
      <Footer
        siteTitle={site.siteMetadata.title}
        siteContact={site.siteMetadata.contact}
      />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
        contact {
          email
          phone
          address
          orgnr
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "logotype.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`