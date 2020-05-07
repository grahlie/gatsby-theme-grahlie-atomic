import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../Util/theme'

interface ThemeProps extends ITheme {}
interface Props {
    children: object,
}

const List = ({ children } : Props) => (
    <StyledList theme={theme()}>{children}</StyledList>
)

export default List

const StyledList = styled.ul`
    display: block;
    list-style-position: outside;
    list-style-image: none;
    margin: 0 0 ${(props: ThemeProps) => props.theme.space[3]}px ${(props: ThemeProps) => props.theme.space[3]}px;
    padding: 0;
    position: relative;
    top: 0px;
    width: 100%;
`;
