import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../Util/theme'

interface Props {
    children: object,
}

const List = ({ children } : Props) => (
    <StyledList theme={theme()}>{children}</StyledList>
)

export default List

const StyledList = styled.ul<ITheme>`
    display: block;
    list-style-position: outside;
    list-style-image: none;
    margin: 0 0 ${(props: ITheme) => props.theme.space[3]}px ${(props: ITheme) => props.theme.space[3]}px;
    padding: 0;
    position: relative;
    top: 0px;
    width: 100%;
`;
