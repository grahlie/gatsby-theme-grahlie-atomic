import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../../organisms/Header'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import '../normalize.css'

interface Props {
  children: object
}

const Landingpage = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        siteContact={data.site.siteMetadata.contact}
      />
    </>
  )
}

export default Landingpage
