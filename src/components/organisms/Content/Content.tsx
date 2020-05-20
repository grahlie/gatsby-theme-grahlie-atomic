import React from "react"
import styled from "@emotion/styled";

import { theme, ITheme } from '../../atoms/Util/theme'

interface ComponentProps {
    children: object,
}

const Content = ({ children } : ComponentProps) => {
  return (
    <StyledContentContainer theme={theme()}>
        {children}
    </StyledContentContainer>
  )
}

export default Content

const StyledContentContainer = styled.main<ITheme>`
    margin: ${(props: ITheme) => props.theme.space[5]}px auto;
    max-width: ${(props: ITheme) => props.theme.viewport}px;
`
