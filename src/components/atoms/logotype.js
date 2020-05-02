import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: ${props => (props.size === "large" ? "200px" : "80px")};
  max-width: ${props => (props.size === "large" ? "200px" : "80px")};
  display: inline-block;
  margin: 2rem auto;
  z-index: 99;
  text-align: left;

  @media only screen and (max-width: 600px) {
    max-width: 80px;
  }
`

const Logotype = ({ siteTitle, size, position }) => {
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
      <StyledContainer size={size} position={position}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt={siteTitle}
        />
      </StyledContainer>
    </Link>
  )
}

export default Logotype
