const canvas = require('../../../../../canvas');
const Bomb = require('../bomb');
const imgSrc1 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-3.png';
const imgSrc4 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-4.png';
const imgSrc5 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-5.png';
const imgSrc6 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-6.png';
const imgSrc7 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-7.png';
const imgSrc8 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-8.png';
const imgSrc9 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-9.png';
const imgSrc10 =
  './main/entity/category/explosive/bomb/standard/assets/images/image-source-10.png';

function StandardBomb({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  creator,
  factory,
  entities
}) {
  Bomb.call(this, {
    x,
    y,
    width: width || StandardBomb.width,
    height: height || StandardBomb.height,
    speed: speed || 4,
    dx: dx || 0,
    dy: dy || creator.faction === 'enemy' ? 1 : -1,
    faction,
    imgSrc: [
      imgSrc1,
      imgSrc2,
      imgSrc3,
      imgSrc4,
      imgSrc5,
      imgSrc6,
      imgSrc7,
      imgSrc8,
      imgSrc9,
      imgSrc10
    ],
    degrees: 90,
    creator,
    factory,
    entities
  });

  this.props.type = [...this.props.type, 'standard'];
}

StandardBomb.prototype = Object.create(Bomb.prototype);

StandardBomb.width = canvas.res * 7;
StandardBomb.height = canvas.res * 7;

module.exports = StandardBomb;
