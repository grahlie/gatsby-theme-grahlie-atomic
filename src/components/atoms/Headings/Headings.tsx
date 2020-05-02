import styled from "@emotion/styled";
import { css } from '@emotion/core';

interface Props {
    themes: {
        fonts: {
            headings: string,
        },
        colors: {
            primary: string
        }
    },
    position: string,
}

const commonStyles = css`
    margin: 0;
    padding: 0;
    font-family: ${(props: Props) => props.themes.fonts.headings};
    font-weight: bold;
    color: ${(props: Props) => props.themes.colors.primary};
    text-rendering: optimizeLegibility;
    word-break: keep-all;
`;

const Hero = styled.h1`
    ${commonStyles}
    font-size: 54px;
    line-height: 1.15;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 36px;
        line-height: 1.2;
    }
`;

const h1 = styled.h1`
    ${commonStyles}
    font-size: 54px;
    line-height: 1.15;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 36px;
        line-height: 1.2;
    }
`;

const h2 = styled.h2`
    ${commonStyles}
    font-size: 36px;
    line-height: 1.333;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 1.45;
    }
`;

const h3 = styled.h3`
    ${commonStyles}
    font-size: 24px;
    line-height: 1.45;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const h4 = styled.h4`
    ${commonStyles}
    font-size: 18px;
    line-height: 1.45;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const h5 = styled.h5`
    ${commonStyles}
    font-size: 18px;
    font-weight: normal;
    line-height: 1.45;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const h6 = styled.h6`
    ${commonStyles}
    font-size: 16px;
    line-height: 1.45;
    text-align: ${(props: Props) => props.position || "center"};

    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export default {
    Hero,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
};