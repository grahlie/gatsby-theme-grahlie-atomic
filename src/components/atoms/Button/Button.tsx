import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { theme, ITheme } from '../Util/theme'

interface Props {
    variant: string,
    children: object,
}

const Button = ({variant, children} : Props) => {
    let ButtonComponent = null;
    switch(variant) {
        case 'Primary': 
            ButtonComponent = (theme: ITheme, children: Props) => (<PrimaryButton theme={theme}>{children}</PrimaryButton>);
            break;
        case 'Secondary': 
            ButtonComponent = (theme: ITheme, children: Props) => (<SecondaryButton theme={theme}>{children}</SecondaryButton>);
            break;
        case 'Error': 
            ButtonComponent = (theme: ITheme, children: Props) => (<ErrorButton theme={theme}>{children}</ErrorButton>);
            break;
        case 'Success': 
            ButtonComponent = (theme: ITheme, children: Props) => (<SuccessButton theme={theme}>{children}</SuccessButton>);
            break;
        default:
            ButtonComponent = () => 'Variant dont exists';
            break;
    }

    return (
        ButtonComponent(theme(), children)
    );
}

export default Button;

const commonStyle = css`
    border-radius: 6px;
    cursor: pointer;
    display: block;
    font-family: ${(props: ITheme) => props.theme.fonts.body};
    text-decoration: none;
    text-align: center;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
`;

const PrimaryButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.primary.background};
    color: ${(props: ITheme) => props.theme.buttons.primary.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: ITheme) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.primary.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.primary.hover};
    }
`;
const SecondaryButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.secondary.background};
    color: ${(props: ITheme) => props.theme.buttons.secondary.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: ITheme) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.secondary.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.secondary.hover};
    }
`;
const ErrorButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.error.background};
    color: ${(props: ITheme) => props.theme.buttons.error.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: ITheme) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.error.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.error.hover};
    }
`;
const SuccessButton = styled.a<ITheme>`
    ${commonStyle}
    background: ${(props: ITheme) => props.theme.buttons.success.background};
    color: ${(props: ITheme) => props.theme.buttons.success.text};
    font-size: ${(props: ITheme) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: ITheme) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: ITheme) => props.theme.buttons.success.hoverText};
        background: ${(props: ITheme) => props.theme.buttons.success.hover};
    }
`;