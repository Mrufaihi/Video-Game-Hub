const getCroppedImage = (url: string) => {
  //Exceptions
  if (!url) {
    throw new Error('URL cannot be null or undefined');
  }

  const mediaIndex = url.indexOf('media/');
  if (mediaIndex === -1) {
    throw new Error("URL does not contain 'media/'");
  }

  const index = url.indexOf('media/') + 'media/'.length; // index of 'media/' start + its length ->(after media/)
  const croppedImg = url.slice(0, index) + 'crop/600/400/' + url.slice(index); //get url from after index .. add text.. add remaining url
  return croppedImg; //return cropped url from this fucntion
};

export default getCroppedImage;
