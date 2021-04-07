import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import * as Icon from 'react-feather'
import { Styled } from 'theme-ui'

import Header from '../../organisms/Header'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import SEO from '../../molecules/Seo'
import Hero from '../../molecules/Hero'

import * as Heading from '../../atoms/Heading'
import * as List from '../../atoms/List'
import * as Link from '../../atoms/Link'
import ListItem from '../../atoms/ListItem'
import Paragraph from '../../atoms/Paragraph'
import Button from '../../atoms/Button'
import Divider from '../../atoms/Divider'

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
      childImageSharp: {
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

  const shortcodes = { Styled, Hero, Heading, Paragraph, Button, Divider, Icon }
  
  return (
    <>
      <SEO 
        title={frontmatter.title}
        siteTitle={site.siteMetadata.title}
        author={site.siteMetadata.author}
      />
      <MDXProvider components={{
        ...shortcodes,
        h1: Heading.One,
        h2: Heading.Two,
        h3: Heading.Three,
        h4: Heading.Four,
        h5: Heading.Five,
        h6: Heading.Six,
        p: Paragraph,
        thematicBreak: Divider,
        ul: List.UnorderedList,
        ol: List.OrderedList,
        li: ListItem,
        a: Link.StyledLink
      }}>
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
      </MDXProvider>
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