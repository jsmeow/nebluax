const canvas = require('../../../../canvas');
const Explosion = require('../explosion');
const imgSrc1 =
  './main/entity/category/explosion/destroy/assets/images/shield1.png';
const imgSrc2 =
  './main/entity/category/explosion/destroy/assets/images/shield2.png';
const imgSrc3 =
  './main/entity/category/explosion/destroy/assets/images/shield3.png';
const imgSrc4 =
  './main/entity/category/explosion/destroy/assets/images/image-source-4.png';
const imgSrc5 =
  './main/entity/category/explosion/destroy/assets/images/image-source-5.png';
const imgSrc6 =
  './main/entity/category/explosion/destroy/assets/images/image-source-6.png';
const imgSrc7 =
  './main/entity/category/explosion/destroy/assets/images/image-source-7.png';

function DestroyExplosion({ x, y, width, height, faction, points, entities }) {
  Explosion.call(this, {
    x,
    y,
    width: width || DestroyExplosion.width,
    height: height || DestroyExplosion.height,
    faction,
    points,
    imgSrcs: [
      imgSrc1,
      imgSrc2,
      imgSrc3,
      imgSrc4,
      imgSrc5,
      imgSrc6,
      imgSrc7
    ],
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'destroy'];
}

DestroyExplosion.prototype = Object.create(Explosion.prototype);

DestroyExplosion.width = canvas.res * 15;
DestroyExplosion.height = canvas.res * 15;

module.exports = DestroyExplosion;
