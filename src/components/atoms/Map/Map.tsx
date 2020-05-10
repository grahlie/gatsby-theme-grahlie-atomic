import React from "react"
import styled from "@emotion/styled";

interface Props {
  mapUrl: string,
  mapTitle: string,
}

const Map = ({ mapUrl, mapTitle } : Props) => {
  return (
    <StyledContainer>
      <iframe
        src={mapUrl}
        title={mapTitle}
        frameBorder="0"
        width="600"
        height="400"
        style={{
          border: "0",
          height: "100%",
          left: "0",
          position: "absolute",
          top: "0",
          width: "100%",
        }}
        webkitAllowFullScreen="true"
        mozAllowFullScreen="true"
        allowFullScreen
        aria-hidden="false"
      />
    </StyledContainer>
  )
}

export default Map

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 280px;
  }
`
