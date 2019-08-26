const { fps } = require('../../../../options');
const Explosive = require('../explosive');

function Bomb({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  imgSrc,
  degrees,
  creator,
  factory,
  entities
}) {
  Explosive.call(this, {
    x,
    y,
    width,
    height,
    speed,
    dx,
    dy,
    faction,
    imgSrc,
    degrees,
    creator,
    factory,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'bomb'];

  /** @override **/
  this.animationTimer.delay = fps * 0.5;
}

Bomb.prototype = Object.create(Explosive.prototype);

module.exports = Bomb;
