function generateImage(imgSrc) {
  return imgSrc.map(_imgSrc => {
    const _img = new Image();
    _img.src = _imgSrc;
    return _img;
  });
}

function generateUuid(name) {
  return `${name || 'unknown'}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

module.exports = {
  generateImage,
  generateUuid
};
