import isValidVideoFile from './videoValidator';

describe('videoValidator', () => {
  it('should validate the valid format of the video', () => {
    expect(isValidVideoFile('.pdf')).toBeFalsy();
    expect(isValidVideoFile('video/x-flv')).toBeTruthy();
    expect(isValidVideoFile('video/MP2T')).toBeTruthy();
    expect(isValidVideoFile('video/3gpp')).toBeTruthy();
    expect(isValidVideoFile('video/x-ms-wmv')).toBeTruthy();
  });
});
