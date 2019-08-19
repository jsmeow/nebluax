const LargeStar = require('../large-wide-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/large-wide/purple-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/large-wide/purple-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/large-wide/purple-1/assets/images/image-source-3.png';

function LargeWidePurpleStar1({ x, y, width, height }) {
  LargeStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.props.type = [...this.props.type, 'purple'];
}

LargeWidePurpleStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeWidePurpleStar1;
