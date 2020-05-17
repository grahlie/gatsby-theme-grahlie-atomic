import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../Util/theme'

import { StyledParagraph } from '../Paragraph'

interface Props {
    action: React.MouseEvent<HTMLButtonElement>,
    children: object,
}

const ListItem = ({ action, children, ...props } : Props) => (
    <StyledItem theme={theme()} onClick={() => action} {...props}>
      {children}
    </StyledItem>
)

export default ListItem

const StyledItem = styled.li<ITheme>`
  ${StyledParagraph}
  list-style: outside none none;
  margin: ${(props: ITheme) => props.theme.space[2]}px 0px;
  padding: ${(props: ITheme) => props.theme.space[2]}px 0px;
`;
