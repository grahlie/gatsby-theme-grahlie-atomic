import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  variant?: string
  children: object
}

interface StyledProps extends ITheme {
  fontSize: number
}

export const StyledParagraph = styled.p<StyledProps>`
  color: ${(props: StyledProps) => props.theme.colors.text};
  font-family: ${(props: StyledProps) => props.theme.fonts.body};
  font-size: ${(props: StyledProps) => props.theme.fontSizes[props.fontSize]}px;
  font-weight: ${(props: StyledProps) => props.theme.fontWeights.body};
  line-height: ${(props: StyledProps) => props.theme.lineHeights.body};
  text-rendering: optimizeLegibility;

  b {
    font-weight: ${(props: StyledProps) => props.theme.fontWeights.bold};
  }
`

const Paragraph = ({ variant, children }: Props) => {
  let fontSize = 2
  switch (variant) {
    case 'XLarge':
      fontSize = 10
      break
    case 'Large':
      fontSize = 8
      break
    case 'Medium':
      fontSize = 4
      break
    case 'Regular':
      fontSize = 2
      break
    case 'Small':
      fontSize = 0
      break
    default:
      fontSize = 2
  }

  return (
    <StyledParagraph theme={themeFunc()} fontSize={fontSize}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
