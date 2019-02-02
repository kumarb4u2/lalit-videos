import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BASE_URL } from '../helper/constants';
import SingleVideo from '../components/SingleVideo';

class HomeContainer extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios.get(`${BASE_URL}/videos`).then(response => {
      this.setState({ videos: response.data.videos });
    });
  }

  render() {
    return (
      <div className="container-fluid container-padding">
        <div className="row">
          {this.state.videos.map(item => (
            <div key={item} className="col-xs-12 col-sm-4 video-margin">
              <SingleVideo src={`${BASE_URL}/uploads/${item}`} title={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeContainer;
