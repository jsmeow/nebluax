const MediumStar = require('../medium-star');
const imageSource1 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-3.png';

function MediumBlinkingRedStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  image,
  meta
}) {
  MediumStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      ...props,
      type: ['red']
    },
    status,
    points,
    image: {
      ...image,
      src: [imageSource1, imageSource2, imageSource3, imageSource2]
    },
    meta
  });
}

MediumBlinkingRedStar1.prototype = Object.create(MediumStar.prototype);

module.exports = MediumBlinkingRedStar1;
