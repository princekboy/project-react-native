export const checkImageURL = (url) => {
  if(!url) return false
  else{
      const patter = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp|heic|tiff)$', 'i');
      return patter.test(url);
  }
};