import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../Util/theme'

interface Props {
    open: boolean,
    variant: string,
    children: object,
}

interface StyledListProps extends ITheme {
    open: boolean,
}

const List = ({ open, variant, children } : Props) => {
    let ListComponent = null
    switch(variant) {
        case 'Unorded': 
            ListComponent = (theme: ITheme, open: boolean, children: Props) => (<StylerdUnordedList open={open} theme={theme}>{children}</StylerdUnordedList>);
            break;
        case 'Odered': 
            ListComponent = (theme: ITheme, open: boolean, children: Props) => (<StylerdOrdedList open={open} theme={theme}>{children}</StylerdOrdedList>);
            break;
        case 'Navigation': 
            ListComponent = (theme: ITheme, open: boolean, children: Props) => (<StyledNavigation open={open} theme={theme}>{children}</StyledNavigation>);
            break;
        default:
            ListComponent = (theme: ITheme, open: boolean, children: Props) => (<StylerdUnordedList open={open} theme={theme}>{children}</StylerdUnordedList>);
            break;
    }

    return ListComponent(theme(), open, children)
}

export default List

const StylerdUnordedList = styled.ul<StyledListProps>`
    display: block;
    list-style-position: outside;
    list-style-image: none;
    margin: 0 0 ${(props: ITheme) => props.theme.space[3]}px ${(props: ITheme) => props.theme.space[3]}px;
    padding: 0;
    position: relative;
    top: 0px;
    width: 100%;
`;

const StylerdOrdedList = styled.ul<StyledListProps>`
    display: block;
    list-style-position: outside;
    list-style-image: none;
    margin: 0 0 ${(props: ITheme) => props.theme.space[3]}px ${(props: ITheme) => props.theme.space[3]}px;
    padding: 0;
    position: relative;
    top: 0px;
    width: 100%;
`;

const StyledNavigation = styled.ul<StyledListProps>`
    background: ${(props: ITheme) => props.theme.colors.primary};
    border: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0px;
    margin: auto 0px;
    overflow: hidden;
    padding: 0px;
    position: fixed;
    text-align: center;
    transform: translate3d(0, ${props => props.open ? '0' : '-100%'}, 0);
    transition: all .25s ease-out;
    top: 0px;
    width: 100vw;
    z-index: 999;
`
