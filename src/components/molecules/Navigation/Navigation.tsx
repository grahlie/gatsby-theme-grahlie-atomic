import React from "react"
import Popup from "reactjs-popup"
import styled from "@emotion/styled";

import Burger from '../../atoms/Burger'
import List from '../../atoms/List'
import ListItem from '../../atoms/ListItem'
import Link from '../../atoms/Link'

interface Props {
    links: object
}

const Navigation = ({ links } : Props) => {
    const navigation = (close) => {
        return links.map((link, index) => (
            <ListItem key={index} onClick={close}>
              <Link to={link.href}>{link.title}</Link>
            </ListItem>
        ))
    }

    return (
        <StyledPopup
            modal
            closeOnDocumentClick={false}
            trigger={open => <Burger open={open} />}
        >
            {
            close => 
                <List>
                    {navigation(close)}
                </List>
            }
        </StyledPopup>
    )
}

export default Navigation

const StyledPopup = styled(Popup)`
    &-content {
        background: rgba(255, 255, 255, 0) !important;
        width: 80% !important;
        margin: 0 auto !important;
        border: none !important;
    }

    &-overlay {
        background: rgba(23, 5, 70, 0.98) !important;
    }
`
