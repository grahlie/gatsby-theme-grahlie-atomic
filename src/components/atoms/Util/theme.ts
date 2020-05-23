import { useThemeUI, Theme } from 'theme-ui'

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
    fontSizes: Array<number>,
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
