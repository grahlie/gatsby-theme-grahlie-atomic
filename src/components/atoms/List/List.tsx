import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  open: boolean
  variant: string
  children: object
}

interface StyledListProps extends ITheme {
  open: boolean
}

const List = ({ open, variant, children }: Props) => {
  let ListComponent = null
  switch (variant) {
    case 'Unorded':
      ListComponent = (theme: ITheme, open: boolean, children: object) => (
        <UnorderedList open={open} theme={theme}>
          {children}
        </UnorderedList>
      )
      break
    case 'Odered':
      ListComponent = (theme: ITheme, open: boolean, children: object) => (
        <OrderedList open={open} theme={theme}>
          {children}
        </OrderedList>
      )
      break
    case 'Navigation':
      ListComponent = (theme: ITheme, open: boolean, children: object) => (
        <NavigationList open={open} theme={theme}>
          {children}
        </NavigationList>
      )
      break
    default:
      ListComponent = (theme: ITheme, open: boolean, children: object) => (
        <UnorderedList open={open} theme={theme}>
          {children}
        </UnorderedList>
      )
      break
  }

  return ListComponent(themeFunc(), open, children)
}

const UnorderedList = styled.ul<StyledListProps>`
  display: block;
  list-style-position: outside;
  list-style-image: none;
  margin: 0 0 ${(props: ITheme) => props.theme.space[3]}px
    ${(props: ITheme) => props.theme.space[3]}px;
  padding: 0;
  position: relative;
  top: 0px;
  width: 100%;
`

const OrderedList = styled.ol<StyledListProps>`
  display: block;
  list-style-position: outside;
  list-style-image: none;
  margin: 0 0 ${(props: ITheme) => props.theme.space[3]}px
    ${(props: ITheme) => props.theme.space[3]}px;
  padding: 0;
  position: relative;
  top: 0px;
  width: 100%;
`

const NavigationList = styled.ul<StyledListProps>`
  background: ${(props: ITheme) => props.theme.colors.primary};
  border: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0px;
  margin: auto 0px;
  overflow: hidden;
  padding: 0px;
  position: fixed;
  text-align: center;
  transform: translate3d(0, ${props => (props.open ? '0' : '-100%')}, 0);
  transition: all 0.25s ease-out;
  top: 0px;
  width: 100vw;
  z-index: 999;
`

export {
  List as default,
  UnorderedList,
  OrderedList,
  NavigationList
}