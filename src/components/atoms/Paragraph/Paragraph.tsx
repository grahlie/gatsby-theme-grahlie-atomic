import styled from '@emotion/styled';

import { theme, ITheme } from '../Util/theme'

interface Props extends ITheme {}

const StyledParagraph = styled.p`
  color: ${(props: Props) => props.theme.colors.text};
  font-family: ${(props: Props) => props.theme.fonts.body};
  font-size: ${(props: Props) => props.theme.fontSizes.body[2]}px;
  font-weight: ${(props: Props) => props.theme.fontWeights.body};
  line-height: ${(props: Props) => props.theme.lineHeights.body};
  text-rendering: optimizeLegibility;

  b {
    font-weight: ${(props: Props) => props.theme.fontWeights.bold};
  }
`;

const Paragraph = ({children}) => {
  return (
    <StyledParagraph theme={theme()}>{children}</StyledParagraph>
  )
}

export default Paragraph;
