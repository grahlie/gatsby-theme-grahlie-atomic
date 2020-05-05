import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
    siteTitle: string
}

const Logotype = ({ siteTitle } : Props) => {
  const data = useStaticQuery(graphql`
    query {
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
    <Link to="/">
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt={siteTitle}
        />
    </Link>
  )
}

export default Logotype
