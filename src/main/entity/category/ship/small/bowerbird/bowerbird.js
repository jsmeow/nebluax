const canvas = require('../../../../../canvas/canvas');
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
function Bowerbird({ degrees, faction, factory, entities }) {
  Ship.call(this, {
    x: canvas.width * 0.5,
    y: canvas.height * 0.5,
    width: Bowerbird.width,
    height: Bowerbird.height,
    faction,
    imgSrc: {
      allied,
      enemy,
      neutral,
      damaged
    },
    degrees,
    factory,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'bowerbird'];

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
      x: this.pos.x + this.dims.width * 0.5 - StandardBullet.width * 0.5,
      y: this.pos.y + this.dims.height,
      degrees: Math.PI,
      creator: this
    });
  };
}

Bowerbird.prototype = Object.create(Ship.prototype);

Bowerbird.width = canvas.res * 15;
Bowerbird.height = canvas.res * 15;

module.exports = Bowerbird;
