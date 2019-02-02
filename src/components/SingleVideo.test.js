import React from 'react';
import { shallow } from 'enzyme';
import SingleVideo from './SingleVideo';

describe('SingleVideo', () => {
  it('should match snapshot in default state', () => {
    const playVideo = jest.fn();
    const component = shallow(
      <SingleVideo
        title="my video"
        src="http://localhost:4000/myvideo.mp4"
        onClickHandler={playVideo}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
