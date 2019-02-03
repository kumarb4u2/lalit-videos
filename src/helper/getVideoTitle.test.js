import getVideoTitle from './getVideoTitle';

describe('getVideoTitle', () => {
  it('should return the title of the video by removing extension and timestamp', () => {
    expect(getVideoTitle('withExtension.mp4')).toEqual('withExtension.mp4');
    expect(getVideoTitle('withoutExtension')).toEqual('withoutExtension');
    expect(getVideoTitle('32342343___withTimeStampAndExtension.3gp')).toEqual(
      'withTimeStampAndExtension'
    );
    expect(getVideoTitle('233243___dasdsd.ad.sad.mp4')).toEqual(
      'dasdsd.ad.sad'
    );
    expect(getVideoTitle('asad___adasds___asdasdsad___asds.mp4')).toEqual(
      'asds'
    );
  });
});
