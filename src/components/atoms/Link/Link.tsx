import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  to: string
  children: object
  color: string
}
interface StyledProps extends ITheme {
  color: string
}

const LinkItem = ({ to, color, children }: Props) => (
  <StyledLink theme={themeFunc()} to={to} color={color}>
    {children}
  </StyledLink>
)

const StyledLink = styled(Link)<StyledProps>`
  font-family: ${(props: StyledProps) => props.theme.fonts.body};
  font-size: ${(props: StyledProps) => props.theme.fontSizes[2]}px;
  font-weight: ${(props: StyledProps) => props.theme.fontWeights.body};
  line-height: ${(props: StyledProps) => props.theme.lineHeights.body};
  background-color: transparent;
  color: ${(props: StyledProps) =>
    props.color ? props.color : props.theme.colors.primary};
  cursor: pointer;
  text-rendering: optimizeLegibility;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;

  &:active,
  &:hover,
  &:visited,
  &:hover,
  &:active,
  &:focus,
  &:focus-within,
  &:link:active,
  &:visited:active {
    color: ${(props: StyledProps) =>
      props.color ? props.color : props.theme.colors.primary};
    outline-width: 0;
  }
`

export {
  LinkItem as default,
  StyledLink
}