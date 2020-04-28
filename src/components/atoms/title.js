import PropTypes from "prop-types"
import React from 'react';
import styled, {css} from 'styled-components';

const SharedHeader = css`
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: ${props => props.color ? props.color : '#000'};
    font-family: ${props => props.font ? props.font : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'};
    font-weight: bold;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
`;
const HeroContainer = styled.h1`
    ${SharedHeader}
    font-size: 5rem;
    margin-bottom: 4wrem;
    text-align: ${props => props.position || 'center'};

    @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
        margin: 1rem 0;
    }
`;
const H1Container = styled.h1`
    ${SharedHeader}
    font-size: 3.8rem;
    margin-bottom: 2rem;
    text-align: ${props => props.position || 'center'};

    @media only screen and (max-width: 600px) {
        font-size: 1.65rem;
        margin: 1rem 0;
    }
`;
const H2Container = styled.h2`
    ${SharedHeader}
    font-size: 2.4rem;
    text-align: ${props => props.position || 'center'};

    @media only screen and (max-width: 600px) {
        font-size: 1.4rem;
        margin: 0.5rem 0;
    }
`;
const H3Container = styled.h3`
    ${SharedHeader}
    font-size: 1.38316rem;
    text-align: ${props => props.position || 'center'};

    @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
        margin: 0.2rem 0;
        text-align: center;
    }
`;
const H4Container = styled.h4`
    ${SharedHeader}
    font-size: 1rem;
    text-align: ${props => props.position || 'center'};
`;
const H5Container = styled.h5`
    ${SharedHeader}
    font-size: 0.85028rem;
    text-align: ${props => props.position || 'center'};
`;

const Title = ({ color, children, font, level, position }) => {
    let HeaderComponent = null;
    switch (level) {
        case 'hero':
            HeaderComponent = ( children ) => <HeroContainer color={color} font={font} position={position}>{children}</HeroContainer>;
            break;
        case 1:
            HeaderComponent = ( children ) => <H1Container color={color} font={font} position={position}>{children}</H1Container>;
            break;
        case 2:
            HeaderComponent = ( children ) => <H2Container color={color} font={font} position={position}>{children}</H2Container>;
            break;
        case 3:
            HeaderComponent = ( children ) => <H3Container color={color} font={font} position={position}>{children}</H3Container>;
            break;
        case 4:
            HeaderComponent = ( children ) => <H4Container color={color} font={font} position={position}>{children}</H4Container>;
            break;
        case 5:
            HeaderComponent = ( children ) => <H5Container color={color} font={font} position={position}>{children}</H5Container>;
            break;
        default:
            HeaderComponent = ( children ) => <H1Container color={color} font={font} position={position}>{children}</H1Container>;
            break;
    }
    return HeaderComponent(children);
}

Title.propTypes = {
    title: PropTypes.string
}
 
export default Title;