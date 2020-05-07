import React from 'react';
import styled from '@emotion/styled';

import { theme, ITheme } from '../Util/theme'

interface ThemeProps extends ITheme {}
interface Props {
  variant: string,
  children: object,
}

const Paragraph = ({children} : Props) => {
  return (
    <StyledParagraph theme={theme()}>{children}</StyledParagraph>
  )
}

export default Paragraph;

export const StyledParagraph = styled.p`
  color: ${(props: ThemeProps) => props.theme.colors.text};
  font-family: ${(props: ThemeProps) => props.theme.fonts.body};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.body[2]}px;
  font-weight: ${(props: ThemeProps) => props.theme.fontWeights.body};
  line-height: ${(props: ThemeProps) => props.theme.lineHeights.body};
  text-rendering: optimizeLegibility;

  b {
    font-weight: ${(props: ThemeProps) => props.theme.fontWeights.bold};
  }
`;
