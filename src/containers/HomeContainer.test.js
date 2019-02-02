import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import HomeContainer from './HomeContainer';
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
});
