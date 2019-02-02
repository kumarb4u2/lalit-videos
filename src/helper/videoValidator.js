const isValidVideoFile = type => {
  const validFileType = [
    'video/x-flv',
    'video/mp4',
    'application/x-mpegURL',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-ms-wmv'
  ];
  return validFileType.indexOf(type) >= 0;
};

export default isValidVideoFile;
