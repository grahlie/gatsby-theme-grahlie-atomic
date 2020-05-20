import React from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/core';

import { theme, ITheme } from '../Util/theme'

interface Props {
    variant: string,
    children: string,
}

const Heading = ({variant, children} : Props) => {
    let HeaderComponent = null
    switch(variant) {
        case 'Hero': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Hero theme={theme}>{children}</Hero>);
            break;
        case 'One': 
            HeaderComponent = (theme: ITheme, children: Props) => (<One theme={theme}>{children}</One>);
            break;
        case 'Two': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Two theme={theme}>{children}</Two>);
            break;
        case 'Three': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Three theme={theme}>{children}</Three>);
            break;
        case 'Four': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Four theme={theme}>{children}</Four>);
            break;
        case 'Five': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Five theme={theme}>{children}</Five>);
            break;
        case 'Six': 
            HeaderComponent = (theme: ITheme, children: Props) => (<Six theme={theme}>{children}</Six>);
            break;
        default:
            HeaderComponent = () => 'Variant dont exists';
            break;
    }

    return (
        HeaderComponent(theme(), children)
    )
}

export default Heading

const commonStyles = css`
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    word-break: keep-all;
`;

const Hero = styled.h1<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[7]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[0]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[5]}px;
        line-height: ${(props: ITheme) => props.theme.lineHeights.heading[0]};
    }
`;

const One = styled.h1<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[6]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[0]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[5]}px;
        line-height: ${(props: ITheme) => props.theme.lineHeights.heading[1]};
    }
`;

const Two = styled.h2<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[5]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[2]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[4]}px;
        line-height: ${(props: ITheme) => props.theme.lineHeights.heading[3]};
    }
`;

const Three = styled.h3<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[4]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[3]}px;
    }
`;

const Four = styled.h4<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[3]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[2]}px;
    }
`;

const Five = styled.h5<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[2]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[3]};
    font-weight: normal;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[1]}px;
    }
`;

const Six = styled.h6<ITheme>`
    ${commonStyles}
    font-size: ${(props: ITheme) => props.theme.fontSizes.heading[1]}px;
    font-family: ${(props: ITheme) => props.theme.fonts.heading};
    font-weight: ${(props: ITheme) => props.theme.fontWeights.heading};
    color: ${(props: ITheme) => props.theme.colors.primary};
    line-height: ${(props: ITheme) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ITheme) => props.theme.fontSizes.heading[0]}px;
    } 
`;