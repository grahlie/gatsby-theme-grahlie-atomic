import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import styled from '@emotion/styled'

import { themeFunc, ITheme } from '../../../theme'

import Burger from '../../atoms/Burger'
import List from '../../atoms/List'
import ListItem from '../../atoms/ListItem'
import Link from '../../atoms/Link'

interface Props {
  links: Array<any>
}
interface Link {
  href: string
  title: object
}

const Navigation = ({ links }: Props) => {
  const [open, setOpen] = useState(false)
  const themeObject = themeFunc()

  const clickHandler = () => {
    setOpen(!open)
  }

  const navigation = (
    theme: ITheme,
    open: boolean,
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  ) => {
    return links.map((link: Link, index: number) => {
      return (
        <ListItem key={index} action={clickHandler}>
          <Link to={link.href} color={theme.colors.accent}>
            {link.title}
          </Link>
        </ListItem>
      )
    })
  }

  return (
    <div role="navigation" onClick={clickHandler}>
      <Burger open={open} clickHandler={() => clickHandler()} />
      <List variant="Navigation" open={open}>
        {navigation(themeObject, open, clickHandler)}
      </List>
    </div>
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
