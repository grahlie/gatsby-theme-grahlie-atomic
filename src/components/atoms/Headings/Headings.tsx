/** @jsx jsx */

import { useThemeUI } from 'theme-ui';
import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core';

interface Props {
    theme: {
        fonts: {
            heading: string,
        },
        fontSizes: {
            heading: object,
        },
        fontWeights: {
            heading: object,
        },
        colors: {
            primary: string
        }
    }
}

const commonStyles = css`
    margin: 0;
    padding: 0;
    font-family: ${(props: Props) => props.theme.fonts.heading};
    font-weight: ${(props: Props) => props.theme.fontWeights.heading};
    color: ${(props: Props) => props.theme.colors.primary};
    text-rendering: optimizeLegibility;
    word-break: keep-all;
`;

const Hero = styled.h1`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[7]}px;
    line-height: 1.15;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[6]}px;
        line-height: 1.2;
    }
`;

const One = styled.h1`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[6]}px;
    line-height: 1.15;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[5]}px;
        line-height: 1.2;
    }
`;

const Two = styled.h2`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[5]}px;
    line-height: 1.333;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[4]}px;
        line-height: 1.45;
    }
`;

const Three = styled.h3`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[4]}px;
    line-height: 1.45;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[3]}px;
    }
`;

const Four = styled.h4`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[3]}px;
    line-height: 1.45;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[2]}px;
    }
`;

const Five = styled.h5`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[2]}px;
    font-weight: normal;
    line-height: 1.45;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[1]}px;
    }
`;

const Six = styled.h6`
    ${commonStyles}
    font-size: ${(props: Props) => props.theme.fontSizes.heading[1]}px;
    line-height: 1.45;

    @media only screen and (max-width: 600px) {
        font-size: ${(props: Props) => props.theme.fontSizes.heading[0]}px;
    } 
`;

const Heading = ({variant, children}) => {
    const context = useThemeUI();
    const { theme } = context;

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
    }

    return (
        HeaderComponent(theme, children)
    )
}

export default Heading