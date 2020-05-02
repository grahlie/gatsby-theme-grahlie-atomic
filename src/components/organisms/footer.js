import React from "react"
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  font-size: 12px;
  margin-top: 1rem;
  text-align: center;

  @media only screen and (min-width: 600px) {
    footer {
      position: fixed;
      bottom: 1rem;
      left: 0;
    }
  }
`

const Footer = ({ siteTitle, primaryColor, page }) => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()} - {siteTitle}
      </p>
    </StyledFooter>
  )
}

export default Footer
