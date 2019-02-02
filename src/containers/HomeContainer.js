import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { BASE_URL } from '../helper/constants';
import SingleVideo from '../components/SingleVideo';

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
    return (
      <div className="container-fluid container-padding">
        <div className="row">
          {this.state.videos.map(item => (
            <div key={item} className="col-xs-12 col-sm-4 video-margin">
              <SingleVideo
                src={`${BASE_URL}/uploads/${item}`}
                title={item}
                onClickHandler={this.playVideo}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(HomeContainer);
