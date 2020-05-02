import styled from '@emotion/styled'

interface Props {
  theme: {
      fonts: {
          body: string,
      },
      colors: { 
          primary: string
      }
  }
}

const Paragraph = styled.p`
  line-height: 1.756;
  font-size: 18px;
  color: ${(props: Props) => props.theme.fonts.body};
  font-family: ${(props: Props) => props.theme.colors.primary};
  margin: 0 auto 35px;
  width: 100%;
  max-width: 680px;

  b {
    font-weight: 800;
  }
`;

export default Paragraph;
