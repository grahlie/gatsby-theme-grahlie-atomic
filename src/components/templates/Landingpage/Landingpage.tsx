import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import '../normalize.css'

interface Props {
    children: object,
}

const Landingpage = ({ children } : Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Landingpage
