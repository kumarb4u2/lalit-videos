import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css';

const UploadBox = styled.div`
  margin-top: 20%;
  background-color: grey;
  padding: 50px 0;
  text-align: center;
`;

class UploadContainer extends Component {
  state = {
    videoDetails: {}
  };

  uploadVideo = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/videos', this.state.videoDetails).then(response => {
      console.log(response);
    });
  };

  selectVideo = e => {
    var data = new FormData();
    data.append('file', e.target.files[0]);
    this.setState({ videoDetails: data });
  };

  render() {
    return (
      <div className="container container-paddingw">
        <div class="alert alert-success" role="alert">
          Video uploaded successfully.
        </div>
        <UploadBox>
          <form onSubmit={this.uploadVideo}>
            <input type="file" onChange={this.selectVideo} />
            <button className="btn btn-primary">Upload</button>
          </form>
        </UploadBox>
      </div>
    );
  }
}

export default UploadContainer;
