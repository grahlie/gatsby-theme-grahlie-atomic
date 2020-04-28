import React from 'react';
import Popup from "reactjs-popup";
import styled from "styled-components"

import BurgerIcon from "../atoms/burgerIcon";
import List from '../atoms/list'

const StyledPopup = styled(Popup)`
  &-content {
    background: rgba(255,255,255,0) !important;
    width: 80% !important;
    margin: 0 auto !important;
    border: none !important;
  }

  &-overlay {
    background: rgba(23,5,70,0.98) !important;

    a,
    a:visited,
    a:hover,
    a:active,
    a:focus,
    a:focus-within,
    a:link:active,
    a:visited:active {
      color: #fff;
      text-decoration: none;
    }
  }
`

const Navigation = ({ links }) => {
    return (
        <StyledPopup
            modal
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} color='#fff' />}
        >
            {close => <List close={close} links={links} />}
        </StyledPopup>
    )
}

export default Navigation