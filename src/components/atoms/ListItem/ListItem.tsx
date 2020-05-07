import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../Util/theme'

import { StyledParagraph } from '../Paragraph'

interface ThemeProps extends ITheme {}
interface Props {
    action: boolean,
    children: object,
}

const ListItem = ({ action, children, ...props } : Props) => (
    <StyledItem theme={theme()} onClick={action} {...props}>
      {children}
    </StyledItem>
)

export default ListItem

const StyledItem = styled.li`
  ${StyledParagraph}
  list-style: outside none none;
  margin: ${(props: ThemeProps) => props.theme.space[2]}px 0px;
  padding: ${(props: ThemeProps) => props.theme.space[2]}px 0px;
`;
