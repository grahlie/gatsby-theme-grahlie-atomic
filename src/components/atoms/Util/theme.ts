import { useThemeUI, Theme } from 'theme-ui';

export const theme = (): Theme => {
    const context = useThemeUI();
    const { theme } = context;

    return theme
}

export interface ITheme {
    theme: {
        colors: { 
            text: string,
            background: string,
            primary: string,
            secondary: string,
            accent: string,
            hover: string,
            error: string,
            success: string,
            gradient: string,
        },
        buttons: {
            primary: {
                background: string,
                text: string,
                hover: string,
                hoverText: string,
            },
            secondary: {
                background: string,
                text: string,
                hover: string,
                hoverText: string,
            },
            error: {
                background: string,
                text: string,
                hover: string,
                hoverText: string,
            },
            success: {
                background: string,
                text: string,
                hover: string,
                hoverText: string,
            },
        },
        fonts: {
            body: string,
            heading: string,
            monospace: string,
        },
        fontSizes: {
          body: Array<number>,
          heading: Array<number>,
          buttons: Array<number>,
        },
        fontWeights: {
          body: string,
          heading: object,
          bold: string,
        },
        lineHeights: {
          body: number,
          heading: Array<number>,
        },
        viewport: string,
        breakpoints: Array<string>,
        space: Array<number>,
    }
}