import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import UploadContainer from './UploadContainer';
import { BASE_URL } from '../helper/constants';

jest.mock('axios', () => ({
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        status: 'Ok'
      }
    })
  )
}));

describe('UploadContainer', () => {
  it('should match snapshot in default state', () => {
    const component = shallow(<UploadContainer />);
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot if file upload is successful', () => {
    const component = shallow(<UploadContainer />);
    component.setState({ isSuccess: true });
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot if file upload is failed', () => {
    const component = shallow(<UploadContainer />);
    component.setState({ isError: true });
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot if file is not a video', () => {
    const component = shallow(<UploadContainer />);
    component.setState({ invalidFile: true });
    expect(component).toMatchSnapshot();
  });
  it('should set the selected video in state', () => {
    const component = shallow(<UploadContainer />);
    const event = { target: { files: [{ type: 'video/3gpp' }] } };
    component.instance().selectVideo(event);
    expect(component.state().videoDetails).not.toEqual({});
  });
  it('should not set the selected video in state if file is invalid', () => {
    const component = shallow(<UploadContainer />);
    const event = { target: { files: [{ type: 'document/pdf' }] } };
    component.instance().selectVideo(event);
    expect(component.state().videoDetails).toEqual({});
  });
  it('should not post the selected video to sever if file is not valid', () => {
    const component = shallow(<UploadContainer />);
    const event = { preventDefault: jest.fn() };
    component.setState({
      invalidFile: true,
      videoDetails: { name: 'my-video' }
    });
    component.instance().uploadVideo(event);
    expect(axios.post).toBeCalledTimes(0);
  });
  it('should post the selected video to sever', () => {
    const component = shallow(<UploadContainer />);
    const event = { preventDefault: jest.fn() };
    component.setState({
      invalidFile: false,
      videoDetails: { name: 'my-video' }
    });
    component.instance().uploadVideo(event);
    expect(axios.post).toBeCalledWith(`${BASE_URL}/videos`, {
      name: 'my-video'
    });
  });
});
