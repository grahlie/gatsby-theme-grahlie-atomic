import React from 'react'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

const Divider = ({}) => {
  return (
    <StyledDivider theme={themeFunc()}>
      <span></span>
    </StyledDivider>
  )
}

export default Divider

const StyledDivider = styled.div<ITheme>`
  margin: ${(props: ITheme) => props.theme.space[5]}px auto;
  width: ${(props: ITheme) => props.theme.viewport}px;

  > span {
    background: ${(props: ITheme) => props.theme.colors.primary};
    display: block;
    height: ${(props: ITheme) => props.theme.space[3]}px;
    margin: 0 auto;
    width: ${(props: ITheme) => props.theme.viewport / 12}px;
  }
`
