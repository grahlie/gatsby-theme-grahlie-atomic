import React from "react"
import styled from "@emotion/styled";

import Navigation from "../molecules/Navigation"
import Logotype from '../atoms/Logotype'

const StyledHeaderContainer = styled.header`
    margin: 0 auto;
    max-width: 960px;
    height: ${props => props.height + "px"};

    @media only screen and (max-width: 600px) {
        height: ${props => props.height / 2 + "px"};
    }
`

const Header = ({ siteTitle, page, height }) => {
  const links = [
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
  ]

  return (
    <StyledHeaderContainer height={height}>
        <Logotype position="fixed" siteTitle={siteTitle} />
        <Navigation page={page} links={links}/>
    </StyledHeaderContainer>
  )
}

export default Header
