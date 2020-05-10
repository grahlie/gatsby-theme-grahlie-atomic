import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../../atoms/Util/theme'

import Navigation from "../../molecules/Navigation"
import Logotype from '../../atoms/Logotype'

interface ComponentProps {
    siteTitle: string,
    height?: number,
}
interface StyledProps extends ITheme {
    height: number,
}

const Header = ({ siteTitle, height } : ComponentProps) => {
  const links = [
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
    {href: '/', title: 'Home'},
  ]

  return (
    <StyledHeaderContainer theme={theme()} height={height}>
        <Logotype siteTitle={siteTitle} />
        <Navigation links={links}/>
    </StyledHeaderContainer>
  )
}

export default Header

const StyledHeaderContainer = styled.header<StyledProps>`
    margin: 0 auto;
    max-width: ${(props: StyledProps) => props.theme.viewport}px;
    height: ${props => props.height + "px"};

    @media only screen and (max-width: 600px) {
        height: ${props => props.height / 2 + "px"};
    }
`
