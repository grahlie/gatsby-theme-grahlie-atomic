import React from "react"
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 280px;
  }
`

const Video = ({ videoUrl, videoTitle, ...props }) => (
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
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledContainer>
)

export default Video
