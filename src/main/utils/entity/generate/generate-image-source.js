module.exports = function(imagePath) {
  if (Array.isArray(imagePath)) {
    return imagePath.map(_imagePath => {
      const _image = new Image();
      _image.src = _imagePath;
      return _image;
    });
  }

  const _image = new Image();
  _image.src = imagePath;
  return _image;
};
