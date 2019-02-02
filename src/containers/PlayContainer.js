import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../helper/constants';

const VideoContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Heading = styled.h2`
  color: blue;
`;

const PlayContainer = props => (
  <div className="container-padding">
    <Heading>Playing {props.match.params.id}</Heading>
    <div className="row justify-content-sm-center">
      <VideoContainer className="col-xs-12 col-sm-6">
        <video width="100%" controls autoPlay>
          <source
            src={`${BASE_URL}/uploads/${props.match.params.id}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </div>
  </div>
);

export default withRouter(PlayContainer);
