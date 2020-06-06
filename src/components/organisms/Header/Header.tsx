import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import Navigation from '../../molecules/Navigation'
import Logotype from '../../molecules/Logotype'

interface ComponentProps {
  siteTitle: string
  logotype: FluidObject
  links: Array<any>
  height?: number
}
interface StyledProps extends ITheme {
  height: number
}

const Header = ({ siteTitle, logotype, links, height }: ComponentProps) => {
  const image = <Img fluid={logotype} alt={siteTitle} />

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
