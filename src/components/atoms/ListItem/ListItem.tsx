import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  action: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: object
}

const ListItem = ({ action, children, ...props }: Props) => (
  <StyledItem theme={themeFunc()} onClick={() => action} {...props}>
    {children}
  </StyledItem>
)

export default ListItem

const StyledItem = styled.li<ITheme>`
  color: ${(props: ITheme) => props.theme.colors.text};
  font-family: ${(props: ITheme) => props.theme.fonts.body};
  font-size: ${(props: ITheme) => props.theme.fontSizes[2]}px;
  font-weight: ${(props: ITheme) => props.theme.fontWeights.body};
  line-height: ${(props: ITheme) => props.theme.lineHeights.body};
  text-rendering: optimizeLegibility;
  margin: ${(props: ITheme) => props.theme.space[2]}px;
  padding: ${(props: ITheme) => props.theme.space[2]}px;
`
