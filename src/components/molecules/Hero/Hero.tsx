import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  variant: string
  children: object
}

const Hero = ({ variant, children }: Props) => {
  let HeroComponent = null
  switch (variant) {
    case 'Centered':
      HeroComponent = (theme: ITheme, children: object) => (
        <StyledCenteredContainer theme={theme}>
          {children}
        </StyledCenteredContainer>
      )
      break
    default:
      HeroComponent = () => 'Variant dont exists'
      break
  }

  return HeroComponent(themeFunc(), children)
}

export default Hero

const StyledCenteredContainer = styled.div<ITheme>`
  margin: ${(props: ITheme) => props.theme.space[6]}px auto;
  text-align: center;
  width: ${(props: ITheme) => (props.theme.viewport / 3) * 2}px;

  > h1 {
    margin-bottom: ${(props: ITheme) => props.theme.space[4]}px;
  }

  > a {
    margin: ${(props: ITheme) => props.theme.space[4]}px auto;
    width: ${(props: ITheme) => props.theme.viewport / 4}px;
  }
`
