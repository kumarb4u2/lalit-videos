import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    videoDetails: {},
    videos: []
  };
  componentDidMount() {
    axios.get("http://localhost:4000/videos").then(response => {
      this.setState({ videos: response.data.videos });
    });
  }
  uploadVideo = e => {
    e.preventDefault();
    console.log(this.state.videoDetails);
    axios
      .post("http://localhost:4000/videos", this.state.videoDetails)
      .then(response => {
        console.log(response);
      });
  };

  selectVideo = e => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    this.setState({ videoDetails: data });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lalit Videos</h1>
          <form onSubmit={this.uploadVideo}>
            <input type="file" onChange={this.selectVideo} />
            <button>Upload</button>
          </form>
          {this.state.videos.map(item => (
            <video id={item} width="320" height="240">
              <source
                src={`http://localhost:4000/uploads/${item}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
