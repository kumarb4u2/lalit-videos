import React from 'react';
import { shallow } from 'enzyme';
import SingleVideo from './SingleVideo';

describe('SingleVideo', () => {
  it('should match snapshot in default state', () => {
    const component = shallow(
      <SingleVideo title="my video" src="http://localhost:4000/myvideo.mp4" />
    );
    expect(component).toMatchSnapshot();
  });
});
