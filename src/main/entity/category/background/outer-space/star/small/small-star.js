const { fps } = require('../../../../../../options');
const canvas = require('../../../../../../canvas');
const Star = require('../star');

function SmallStar({ x, y, width, height, imageSource }) {
  Star.call(this, {
    x,
    y,
    width: width || canvas.pixel,
    height: height || canvas.pixel,
    imageSource,
    minDy: 1,
    maxDy: 1.5
  });

  this.type = [...this.type, 'small'];

  /** @override **/
  this.animationTimer.delay = fps;
}

SmallStar.prototype = Object.create(Star.prototype);

module.exports = SmallStar;
