function generateImage(imgSrc) {
  return Array(imgSrc.length)
    .fill(new Image())
    .map((_img, _idx) => Object.assign(_img, { src: imgSrc[_idx] }));
}

function generateUuid(name) {
  return `${name || 'unknown'}-${Math.random()
    .toString(36)
    .substr(2, 9)}\``.toLowerCase();
}

module.exports = {
  generateImage,
  generateUuid
};
