import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('should match snapshot in default state', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  it('should go to upload page on click of upload button', () => {
    const history = { push: jest.fn() };
    const component = shallow(<Header history={history} />);
    component.instance().upload();
    expect(history.push).toBeCalledWith('/upload');
  });
});
