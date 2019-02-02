import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  cursor: pointer;
`;

const VideoContainer = styled.div`
  border: 2px solid black;
`;

const Title = styled.span`
  font-weight: 500;
`;

const SingleVideo = ({ src, onClickHandler, title }) => (
  <VideoContainer>
    <StyledVideo
      width="100%"
      title="Click to play"
      onClick={() => {
        onClickHandler(title);
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
    <Title>{title}</Title>
  </VideoContainer>
);

export default SingleVideo;
