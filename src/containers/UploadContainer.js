import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css';
import isValidVideoFile from '../helper/videoValidator';

const UploadBox = styled.div`
  margin-top: 20%;
  padding: 50px 0;
  text-align: center;
`;

const FlexButton = styled.button`
  width: 100%;
  margin-top: 20px;
  @media (min-width: 767px) {
    width: auto;
    margin-top: 0;
  }
`;

class UploadContainer extends Component {
  state = {
    videoDetails: {},
    isSuccess: false,
    isError: false,
    invalidFile: false
  };

  uploadVideo = e => {
    e.preventDefault();
    this.setState({ isError: false, isSuccess: false });
    // Do not submit if invalid file is selected
    if (!this.state.invalidFile) {
      axios
        .post('http://localhost:4000/videos', this.state.videoDetails)
        .then(response => {
          this.setState({ isSuccess: true });
        })
        .catch(error => {
          this.setState({ isError: true });
        });
    }
  };

  selectVideo = e => {
    var data = new FormData();
    this.setState({ invalidFile: false });
    // check for a valid video file
    if (isValidVideoFile(e.target.files[0].type)) {
      data.append('file', e.target.files[0]);
      this.setState({ videoDetails: data });
    } else {
      this.setState({ invalidFile: true });
    }
  };

  render() {
    const { isSuccess, isError, invalidFile } = this.state;
    return (
      <div className="container container-padding">
        {isSuccess && (
          <div className="alert alert-success" role="alert">
            Video uploaded successfully.
          </div>
        )}
        {isError && (
          <div className="alert alert-danger" role="alert">
            Unable to upload video, please try again later.
          </div>
        )}
        <UploadBox className="bg-light">
          <form onSubmit={this.uploadVideo}>
            {invalidFile && (
              <p className="text-danger">Only videos are allowed.</p>
            )}
            <input type="file" onChange={this.selectVideo} />
            <FlexButton className="btn btn-danger ">Submit</FlexButton>
          </form>
        </UploadBox>
      </div>
    );
  }
}

export default UploadContainer;
