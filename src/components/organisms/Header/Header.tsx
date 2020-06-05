import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import Navigation from '../../molecules/Navigation'
import Logotype from '../../molecules/Logotype'

interface ComponentProps {
  siteTitle: string
  height?: number
}
interface StyledProps extends ITheme {
  height: number
}

const Header = ({ siteTitle, height }: ComponentProps) => {
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

  // TODO: Fetch this data from something
  const links = [{ href: '/', title: 'Home' }]
  const image = <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={siteTitle} />

  return (
    <StyledHeaderContainer theme={themeFunc()} height={height}>
      <Logotype image={image} />
      <Navigation links={links} />
    </StyledHeaderContainer>
  )
}

export default Header

const StyledHeaderContainer = styled.header<StyledProps>`
  margin: 0 auto;
  max-width: ${(props: StyledProps) => props.theme.viewport}px;
  height: ${props => props.height + 'px'};

  @media only screen and (max-width: 600px) {
    height: ${props => props.height / 2 + 'px'};
  }
`
