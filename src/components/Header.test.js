import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('should match snapshot in default state', () => {
    const history = { location: { pathname: '/upload' } };
    const component = shallow(<Header history={history} />);
    expect(component).toMatchSnapshot();
  });
});
