import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../../atoms/Util/theme'

import Paragraph from '../../atoms/Paragraph'

interface Props {
    siteTitle: string,
}

const Footer = ({ siteTitle } : Props) => {
  return (
    <StyledFooter>
      <Paragraph variant='Small'>
        © {new Date().getFullYear()} - {siteTitle}
      </Paragraph>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer<ITheme>`
  max-width: ${(props: ITheme) => props.theme.viewport}px;
  font-size: ${(props: ITheme) => props.theme.fontSizes.body[0]}px;
  margin: 1rem auto;
  text-align: center;

  @media only screen and (min-width: 600px) {
    footer {
      position: fixed;
      bottom: 1rem;
      left: 0;
    }
  }
`
