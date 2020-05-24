import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import { StyledParagraph } from '../Paragraph'

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
  ${StyledParagraph}
  list-style: outside none none;
  margin: ${(props: ITheme) => props.theme.space[2]}px 0px;
  padding: ${(props: ITheme) => props.theme.space[2]}px 0px;
`
