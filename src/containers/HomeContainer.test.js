import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { HomeContainer } from './HomeContainer';
import { BASE_URL } from '../helper/constants';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        videos: [
          '1549022169094.mp4',
          '1549022172369.mp4',
          '1549022175248.mp4',
          '1549058357078.mp4',
          '1549068900721.mp4',
          '1549070037731.mp4'
        ]
      }
    })
  )
}));

describe('HomeContainer', () => {
  it('should match snapshot in default state', () => {
    const component = shallow(<HomeContainer />);
    expect(component).toMatchSnapshot();
  });

  it('should get all videos on load', () => {
    shallow(<HomeContainer />);
    expect(axios.get).toBeCalledWith(`${BASE_URL}/videos`);
  });

  it('should match snapshot if there are some videos present in state', () => {
    const component = shallow(<HomeContainer />);
    component.setState({ videos: ['1233.mp4', '2345.mp4'] });
    expect(component).toMatchSnapshot();
  });
  it('should play the video which of title is passed to', () => {
    const history = { push: jest.fn() };
    const component = shallow(<HomeContainer history={history} />);
    component.instance().playVideo('12345678');
    expect(history.push).toBeCalledWith(`/play/12345678`);
  });
});
