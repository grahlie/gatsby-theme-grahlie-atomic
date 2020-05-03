import { useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

interface Props {
  theme: {
      fonts: {
          body: string,
      },
      fontSizes: {
        body: object,
      },
      fontWeights: {
        body: string,
        bold: string,
      },
      lineHeights: {
        body: string,
      },
      colors: { 
          text: string
      }
  }
}

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
  const context = useThemeUI();
  const { theme } = context;

  return (
    <StyledParagraph theme={theme}>{children}</StyledParagraph>
  )
}

export default Paragraph;
