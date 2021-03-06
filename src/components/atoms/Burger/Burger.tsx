import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { themeFunc, ITheme } from '../../../theme'

interface Props {
  open: boolean
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Burger = ({ open, clickHandler, ...props }: Props) => {
  return (
    <StyledContainer
      className={open ? 'open' : 'closed'}
      onClick={() => clickHandler}
      {...props}
    >
      <StyledBarOne
        theme={themeFunc()}
        className={open ? 'open' : 'closed'}
        key="b1"
      />
      <StyledBarTwo
        theme={themeFunc()}
        className={open ? 'open' : 'closed'}
        key="b2"
      />
      <StyledBarThree
        theme={themeFunc()}
        className={open ? 'open' : 'closed'}
        key="b3"
      />
    </StyledContainer>
  )
}

export default Burger

const StyledContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 9;

  &.open {
    z-index: 9999;
  }
`

const commonBarStyle = css`
  width: 35px;
  height: 4px;
  margin: 6px 0;
  transition: 0.4s;
`
const StyledBarOne = styled.div<ITheme>`
    ${commonBarStyle}
    background: ${(props: ITheme) => props.theme.colors.primary};

    &.open {
        background: ${(props: ITheme) => props.theme.colors.accent};
        -webkit-transform: rotate(-45deg) translate(-6px, 6px);
        transform: rotate(-45deg) translate(-6px, 6px);
    }
`
const StyledBarTwo = styled.div<ITheme>`
    ${commonBarStyle}
    background: ${(props: ITheme) => props.theme.colors.primary};

    &.open {
        opacity: 0;
    }
`
const StyledBarThree = styled.div<ITheme>`
    ${commonBarStyle}
    background: ${(props: ITheme) => props.theme.colors.primary};

    &.open {
        background: ${(props: ITheme) => props.theme.colors.accent};
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`
