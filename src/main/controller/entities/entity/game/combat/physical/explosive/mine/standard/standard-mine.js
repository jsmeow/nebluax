const canvas = require('../../../../../canvas');
const Mine = require('../mine');
const imageSource1 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-3.png';
const imageSource4 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-4.png';
const imageSource5 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-5.png';
const imageSource6 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-6.png';
const imageSource7 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-7.png';
const imageSource8 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-8.png';
const imageSource9 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-9.png';
const imageSource10 =
  './main/entity/type/explosive/mine/standard/assets/images/image-source-10.png';

function StandardMine({
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
  Mine.call(this, {
    x,
    y,
    width: width || StandardMine.width,
    height: height || StandardMine.height,
    speed: speed || 4,
    dx: dx || 0,
    dy: dy || creator.faction === 'enemy' ? 1 : -1,
    faction,
    imageSource: [
      imageSource1,
      imageSource2,
      imageSource3,
      imageSource4,
      imageSource5,
      imageSource6,
      imageSource7,
      imageSource8,
      imageSource9,
      imageSource10
    ],
    creator,
    factory,
    entities
  });

  this.props.type = [...this.props.type, 'standard'];
}

StandardMine.prototype = Object.create(Mine.prototype);

StandardMine.width = canvas.res * 7;
StandardMine.height = canvas.res * 7;

module.exports = StandardMine;
