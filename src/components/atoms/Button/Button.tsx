import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { theme, ITheme } from '../Util/theme'

interface Props extends ITheme {}

const commonStyle = css`
    border-radius: 6px;
    cursor: pointer;
    display: block;
    font-family: ${(props: Props) => props.theme.fonts.body};
    text-decoration: none;
    text-align: center;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
`;

const PrimaryButton = styled.a`
    ${commonStyle}
    background: ${(props: Props) => props.theme.buttons.primary.background};
    color: ${(props: Props) => props.theme.buttons.primary.text};
    font-size: ${(props: Props) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: Props) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: Props) => props.theme.buttons.primary.hoverText};
        background: ${(props: Props) => props.theme.buttons.primary.hover};
    }
`;
const SecondaryButton = styled.a`
    ${commonStyle}
    background: ${(props: Props) => props.theme.buttons.secondary.background};
    color: ${(props: Props) => props.theme.buttons.secondary.text};
    font-size: ${(props: Props) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: Props) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: Props) => props.theme.buttons.secondary.hoverText};
        background: ${(props: Props) => props.theme.buttons.secondary.hover};
    }
`;
const ErrorButton = styled.a`
    ${commonStyle}
    background: ${(props: Props) => props.theme.buttons.error.background};
    color: ${(props: Props) => props.theme.buttons.error.text};
    font-size: ${(props: Props) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: Props) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: Props) => props.theme.buttons.error.hoverText};
        background: ${(props: Props) => props.theme.buttons.error.hover};
    }
`;
const SuccessButton = styled.a`
    ${commonStyle}
    background: ${(props: Props) => props.theme.buttons.success.background};
    color: ${(props: Props) => props.theme.buttons.success.text};
    font-size: ${(props: Props) => props.theme.fontSizes.buttons[1]}px;
    padding: ${(props: Props) => props.theme.space[2]}px;

    &:hover {
        color: ${(props: Props) => props.theme.buttons.success.hoverText};
        background: ${(props: Props) => props.theme.buttons.success.hover};
    }
`;

const Button = ({variant, children}) => {
    let ButtonComponent = null;
    switch(variant) {
        case 'Primary': 
            ButtonComponent = (theme, children) => (<PrimaryButton theme={theme}>{children}</PrimaryButton>);
            break;
        case 'Secondary': 
            ButtonComponent = (theme, children) => (<SecondaryButton theme={theme}>{children}</SecondaryButton>);
            break;
        case 'Error': 
            ButtonComponent = (theme, children) => (<ErrorButton theme={theme}>{children}</ErrorButton>);
            break;
        case 'Success': 
            ButtonComponent = (theme, children) => (<SuccessButton theme={theme}>{children}</SuccessButton>);
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