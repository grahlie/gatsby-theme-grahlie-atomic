import merge from 'lodash/merge'
import { useThemeUI, Theme } from 'theme-ui'

import { colors, buttons } from './colors'
import { styles } from './components'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'

const viewport = 960
const breakpoints = ['40em', '52em', '64em']
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export default merge(
  { colors },
  { buttons },
  { fonts },
  { fontSizes },
  { fontWeights },
  { lineHeights },
  { viewport },
  { breakpoints },
  { space },
  { styles }
)

export const themeFunc = () => {
  const context = useThemeUI()
  const { theme } = context

  return theme
}

export interface ITheme extends Theme {
  theme?: {
    colors: {
      text: string
      background: string
      primary: string
      secondary: string
      accent: string
      hover: string
      error: string
      success: string
      gradient: string
    }
    buttons: {
      primary: {
        background: string
        text: string
        hover: string
        hoverText: string
      }
      secondary: {
        background: string
        text: string
        hover: string
        hoverText: string
      }
      accent: {
        background: string
        text: string
        hover: string
        hoverText: string
      }
      error: {
        background: string
        text: string
        hover: string
        hoverText: string
      }
      success: {
        background: string
        text: string
        hover: string
        hoverText: string
      }
    }
    fonts: {
      body: string
      heading: string
      monospace: string
    }
    fontSizes: Array<number>
    fontWeights: {
      body: string
      heading: string
      bold: string
    }
    lineHeights: {
      body: number
      heading: Array<number>
    }
    viewport: number
    breakpoints: Array<string>
    space: Array<number>
  }
}
