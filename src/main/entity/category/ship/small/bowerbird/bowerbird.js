const canvas = require('../../../../../canvas');
const Ship = require('../../ship');
const StandardBullet = require('../../../bullet/standard/standard-bullet');
const allied =
  './main/entity/category/ship/small/bowerbird/assets/images/allied.png';
const enemy =
  './main/entity/category/ship/small/bowerbird/assets/images/enemy.png';
const neutral =
  './main/entity/category/ship/small/bowerbird/assets/images/neutral.png';
const damaged =
  './main/entity/category/ship/small/bowerbird/assets/images/damaged.png';

// The Bowerbird entity.
function Bowerbird({ degrees, faction, factory, list }) {
  Ship.call(this, {
    x: canvas.width * 0.5,
    y: canvas.height * 0.5,
    width: Bowerbird.width,
    height: Bowerbird.height,
    faction,
    imageSource: {
      allied,
      enemy,
      neutral,
      damaged
    },
    degrees,
    factory,
    list
  });

  /** @override **/
  this.type = [...this.type, 'bowerbird'];

  /** @override **/
  this.points = {
    health: 3,
    attack: 1,
    score: 0,
    value: 0
  };

  /** @override **/
  this.createBullets = function() {
    factory.bullet.standardBullet({
      x: this.x + this.width * 0.5 - StandardBullet.width * 0.5,
      y: this.y + this.height,
      degrees: Math.PI,
      creator: this
    });
  };
}

Bowerbird.prototype = Object.create(Ship.prototype);

Bowerbird.width = canvas.pixel * 15;
Bowerbird.height = canvas.pixel * 15;

module.exports = Bowerbird;
