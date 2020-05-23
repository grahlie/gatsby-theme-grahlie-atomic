import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { themeFunc, ITheme } from '../Util/theme'

interface Props {
  variant: string
  children: string
}

const Button = ({ variant, children }: Props) => {
  let ButtonComponent = null
  switch (variant) {
    case 'Primary':
      ButtonComponent = (theme: ITheme, children: string) => (
        <PrimaryButton theme={theme}>{children}</PrimaryButton>
      )
      break
    case 'Secondary':
      ButtonComponent = (theme: ITheme, children: string) => (
        <SecondaryButton theme={theme}>{children}</SecondaryButton>
      )
      break
    case 'Accent':
      ButtonComponent = (theme: ITheme, children: string) => (
        <AccentButton theme={theme}>{children}</AccentButton>
      )
      break
    case 'Error':
      ButtonComponent = (theme: ITheme, children: string) => (
        <ErrorButton theme={theme}>{children}</ErrorButton>
      )
      break
    case 'Success':
      ButtonComponent = (theme: ITheme, children: string) => (
        <SuccessButton theme={theme}>{children}</SuccessButton>
      )
      break
    default:
      ButtonComponent = () => 'Variant dont exists'
      break
  }
  
  return ButtonComponent(themeFunc(), children)
}

export default Button

const commonStyle = css`
  border-radius: 6px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  text-align: center;

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
`

const PrimaryButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.primary.background};
    color: ${(props: ITheme) => props.theme.buttons.primary.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    padding: ${(props: ITheme) => props.theme.space[3]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.primary.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.primary.hover};
    }
`
const SecondaryButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.secondary.background};
    color: ${(props: ITheme) => props.theme.buttons.secondary.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    padding: ${(props: ITheme) => props.theme.space[3]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.secondary.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.secondary.hover};
    }
`
const AccentButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.accent.background};
    color: ${(props: ITheme) => props.theme.buttons.accent.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    padding: ${(props: ITheme) => props.theme.space[3]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.accent.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.accent.hover};
    }
`
const ErrorButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.error.background};
    color: ${(props: ITheme) => props.theme.buttons.error.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    padding: ${(props: ITheme) => props.theme.space[3]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.error.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.error.hover};
    }
`
const SuccessButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.success.background};
    color: ${(props: ITheme) => props.theme.buttons.success.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    padding: ${(props: ITheme) => props.theme.space[3]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.success.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.success.hover};
    }
`
