import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import Navigation from '../../molecules/Navigation'
import Logotype from '../../atoms/Logotype'

interface ComponentProps {
  siteTitle: string
  height?: number
}
interface StyledProps extends ITheme {
  height: number
}

const Header = ({ siteTitle, height }: ComponentProps) => {
  // TODO: Fetch this data from something
  const links = [{ href: '/', title: 'Home' }]

  return (
    <StyledHeaderContainer theme={themeFunc()} height={height}>
      <div style={{ width: '150px' }}>
        <Logotype siteTitle={siteTitle} />
      </div>
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
