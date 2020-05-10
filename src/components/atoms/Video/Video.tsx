import React from "react"
import styled from "@emotion/styled";

interface Props {
  videoUrl: string,
  videoTitle: string,
}

const Video = ({ videoUrl, videoTitle, ...props } : Props) => (
  <StyledContainer>
    <iframe
      src={videoUrl}
      title={videoTitle}
      style={{
        border: "0",
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
      }}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitAllowFullScreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledContainer>
)

export default Video

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 280px;
  }
`
