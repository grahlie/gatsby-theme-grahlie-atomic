import React from "react"
import styled from "@emotion/styled";
import { Link } from "gatsby"

import { theme, ITheme } from '../Util/theme'

import { StyledParagraph } from '../Paragraph'

interface ThemeProps extends ITheme {}
interface Props {
    to: string,
    children: object,
}

const LinkItem = ({to, children} : Props) => (
    <StyledLink theme={theme()} to={to}>{children}</StyledLink>
)

export default LinkItem

const StyledLink = styled(Link)`
    ${StyledParagraph}
    background-color: transparent;
    color: ${(props: ThemeProps) => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;

    &:active,
    &:hover,
    &:visited,
    &:hover,
    &:active,
    &:focus,
    &:focus-within,
    &:link:active,
    &:visited:active {
        color: ${(props: ThemeProps) => props.theme.colors.primary};
        outline-width: 0;
    }
`;