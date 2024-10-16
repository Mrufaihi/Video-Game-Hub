import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImage = (url: string) => {
  //Exceptions
  if (!url) return noImage; // some game got no imgs (null)

  // const mediaIndex = url.indexOf('media/');
  // if (mediaIndex === -1) {
  //   throw new Error("URL does not contain 'media/'");
  // }

  const index = url.indexOf('media/') + 'media/'.length; // index of 'media/' start + its length ->(after media/)
  const croppedImg = url.slice(0, index) + 'crop/600/400/' + url.slice(index); //get url from after index .. add text.. add remaining url
  return croppedImg; //return cropped url from this fucntion
};

export default getCroppedImage;
