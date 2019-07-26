const Ship = require('../../base/ship');
const enemyImageSrc =
  './main/entities/ships/narrowbill/assets/images/enemy-narrowbill.png';
const alliedImageSrc =
  './main/entities/ships/narrowbill/assets/images/allied-narrowbill.png';
const damagedImageSrc =
  './main/entities/ships/narrowbill/assets/images/damaged-narrowbill.png';

// An entity with the ability to perform roaming.
function Narrowbill({ x, y, width, height, faction }) {
  Ship.call(this, { x, y, width, height, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };
  this.init();
}

Narrowbill.prototype = Object.create(Ship.prototype);

Narrowbill.prototype.init = function() {
  this.loadImage();
};

module.exports = Narrowbill;
