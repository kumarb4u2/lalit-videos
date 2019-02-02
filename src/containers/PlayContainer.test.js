import React from 'react';
import { shallow } from 'enzyme';
import PlayContainer from './PlayContainer';

describe('PlayContainer', () => {
  it('should match snapshot in default state', () => {
    const component = shallow(<PlayContainer />);
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot if video id is passed', () => {
    const match = { params: { id: '1231321' } };
    const component = shallow(<PlayContainer match={match} />);
    expect(component).toMatchSnapshot();
  });
});
