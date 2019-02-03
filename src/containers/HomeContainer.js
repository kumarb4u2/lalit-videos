import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import '../App.css';
import { BASE_URL } from '../helper/constants';
import SingleVideo from '../components/SingleVideo';
import getVideoTitle from '../helper/getVideoTitle';

// export to test unwrapped component
export class HomeContainer extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios.get(`${BASE_URL}/videos`).then(response => {
      this.setState({ videos: response.data.videos });
    });
  }

  playVideo = title => {
    this.props.history.push(`/play/${title}`);
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="container-fluid container-padding">
        {videos.length === 0 && (
          <div className="jumbotron">
            <h1 className="display-4">Hello!</h1>
            <p className="lead">No video is present in library.</p>
            <hr className="my-4" />
            <p>Click Upload button to upload a video.</p>
            <Link className="btn btn-warning btn-lg" to="/upload" role="button">
              Upload
            </Link>
          </div>
        )}
        {videos.length > 0 && (
          <div className="row">
            {this.state.videos.map(item => (
              <div key={item} className="col-xs-12 col-sm-4 video-margin">
                <SingleVideo
                  src={`${BASE_URL}/uploads/${item}`}
                  title={getVideoTitle(item)}
                  fullName={item}
                  onClickHandler={this.playVideo}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(HomeContainer);
