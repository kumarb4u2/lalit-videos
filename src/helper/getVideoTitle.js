const getVideoTitle = item => {
  const splitTitle = item.split('___');
  if (splitTitle.length > 1) {
    const titleWithExtension = splitTitle[splitTitle.length - 1];
    const titleWithoutExtension = titleWithExtension.split('.');
    if (titleWithoutExtension.length > 1) {
      titleWithoutExtension.pop();
      return titleWithoutExtension.join('.');
    }
  }
  return item;
};

export default getVideoTitle;
