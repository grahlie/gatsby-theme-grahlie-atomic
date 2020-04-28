import React from "react"
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 280px;
    }
`;

const Map = ({mapUrl, mapTitle}) => {
    return(
        <StyledContainer>
            <iframe 
                src={mapUrl}
                title={mapTitle}
                frameborder="0"
                width='600'
                height='400'
                style={{
                    border: '0',
                    height: '100%',
                    left: '0',
                    position: 'absolute',
                    top: '0',
                    width: '100%'
                }}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                aria-hidden="false" />
        </StyledContainer>
    )
}

export default Map
