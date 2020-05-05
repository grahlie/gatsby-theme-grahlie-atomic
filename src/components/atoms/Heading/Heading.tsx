import React from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/core';

import { theme, ITheme } from '../Util/theme'

interface ThemeProps extends ITheme {}
interface Props {
    variant: string,
    children: object,
}

const Heading = ({variant, children} : Props) => {
    let HeaderComponent = null
    switch(variant) {
        case 'Hero': 
            HeaderComponent = (theme, children) => (<Hero theme={theme}>{children}</Hero>);
            break;
        case 'One': 
            HeaderComponent = (theme, children) => (<One theme={theme}>{children}</One>);
            break;
        case 'Two': 
            HeaderComponent = (theme, children) => (<Two theme={theme}>{children}</Two>);
            break;
        case 'Three': 
            HeaderComponent = (theme, children) => (<Three theme={theme}>{children}</Three>);
            break;
        case 'Four': 
            HeaderComponent = (theme, children) => (<Four theme={theme}>{children}</Four>);
            break;
        case 'Five': 
            HeaderComponent = (theme, children) => (<Five theme={theme}>{children}</Five>);
            break;
        case 'Six': 
            HeaderComponent = (theme, children) => (<Six theme={theme}>{children}</Six>);
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
    font-family: ${(props: ThemeProps) => props.theme.fonts.heading};
    font-weight: ${(props: ThemeProps) => props.theme.fontWeights.heading};
    color: ${(props: ThemeProps) => props.theme.colors.primary};
    text-rendering: optimizeLegibility;
    word-break: keep-all;
`;

const Hero = styled.h1`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[7]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[0]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[5]}px;
        line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[0]};
    }
`;

const One = styled.h1`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[6]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[0]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[5]}px;
        line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[1]};
    }
`;

const Two = styled.h2`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[5]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[2]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[4]}px;
        line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[3]};
    }
`;

const Three = styled.h3`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[4]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[3]}px;
    }
`;

const Four = styled.h4`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[3]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[2]}px;
    }
`;

const Five = styled.h5`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[2]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[3]};
    font-weight: normal;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[1]}px;
    }
`;

const Six = styled.h6`
    ${commonStyles}
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[1]}px;
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.heading[3]};

    @media only screen and (max-width: 600px) {
        font-size: ${(props: ThemeProps) => props.theme.fontSizes.heading[0]}px;
    } 
`;