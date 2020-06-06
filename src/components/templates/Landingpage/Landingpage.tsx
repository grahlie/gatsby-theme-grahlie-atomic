import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../../molecules/Seo'
import Header from '../../organisms/Header'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import '../normalize.css'

interface Props {
  children: object
}

const Landingpage = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
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
  `)

  // TODO: Fetch from pages folder
  const links = [{ href: '/', title: 'Home' }]

  return (
    <>
      <SEO 
        title='Home'
        siteTitle={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      />
      <Header
        siteTitle={data.site.siteMetadata.title}
        logotype={data.placeholderImage.childImageSharp.fluid}
        links={links}
      />
      <Content>
        {children}
      </Content>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        siteContact={data.site.siteMetadata.contact}
      />
    </>
  )
}

export default Landingpage
