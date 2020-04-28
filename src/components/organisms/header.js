import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import Navigation from '../molecules/navigation'
import Logotype from '../atoms/logotype'

const StyledNavigation = styled.div`
    margin: 0 auto;
    max-width: 960;
    height: ${props => props.height+'px'};

    @media only screen and (max-width: 600px) {
      height: ${props => props.height/2+'px'};
    }
`;

const Header = ({ siteTitle, primaryColor, page, height }) => {
  return (
    <header>
      <StyledNavigation height={height}>
        <Logotype position='fixed' siteTitle={siteTitle} />
        <Navigation page={page} />
      </StyledNavigation>
    </header>
  )
}

export default Header
