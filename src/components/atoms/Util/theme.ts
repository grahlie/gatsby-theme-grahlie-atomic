import { useThemeUI } from 'theme-ui';

export const theme = () => {
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
          body: object,
          heading: object,
          buttons: object,
        },
        fontWeights: {
          body: string,
          heading: object,
          bold: string,
        },
        lineHeights: {
          body: string,
          heading: object,
        },
        breakpoints: object,
        space: object,
    }
}