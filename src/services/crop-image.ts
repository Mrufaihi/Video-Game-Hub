const getCroppedImage = (url: string) => {
  const index = url.indexOf('media/') + 'media/'.length; // index of 'media/' start + its length ->(after media/)
  const croppedImg = url.slice(0, index) + 'crop/600/400/' + url.slice(index); //get url from after index .. add text.. add remaining url
  return croppedImg; //return cropped url from this fucntion
};

export default getCroppedImage;
