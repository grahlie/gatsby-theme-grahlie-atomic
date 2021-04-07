import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import Paragraph from '../../atoms/Paragraph'

interface Props {
  siteTitle: string
  siteContact: {
    email: string
    phone: string
    address: string
    orgnr: string
  }
}

const Footer = ({ siteTitle, siteContact }: Props) => {
  return (
    <StyledFooter theme={themeFunc()}>
      <Paragraph variant="Small">
        © {new Date().getFullYear()} - {siteTitle} <br />
      </Paragraph>
      <address>
        mail: {siteContact.email} - phone: {siteContact.phone} <br />
        address: {siteContact.address} - org.nr: {siteContact.orgnr}
      </address>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer<ITheme>`
  max-width: ${(props: ITheme) => props.theme.viewport}px;
  font-size: ${(props: ITheme) => props.theme.fontSizes[0]}px;
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
