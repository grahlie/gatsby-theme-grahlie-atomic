import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../atoms/Util/theme'

interface ComponentProps {
  children: object
}

const Content = ({ children }: ComponentProps) => {
  return (
    <StyledContentContainer theme={themeFunc()}>{children}</StyledContentContainer>
  )
}

export default Content

const StyledContentContainer = styled.main<ITheme>`
  margin: ${(props: ITheme) => props.theme.space[5]}px auto;
  max-width: ${(props: ITheme) => props.theme.viewport}px;
`
