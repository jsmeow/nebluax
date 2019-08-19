const { fps } = require('../../../../../../options');
const canvas = require('../../../../../../canvas');
const Star = require('../star');

function LargeWideStar({ x, y, width, height, imageSource }) {
  Star.call(this, {
    x,
    y,
    width: width || canvas.pixel * 9,
    height: height || canvas.pixel * 13,
    imageSource,
    maxDy: 0.5
  });

  this.type = [...this.type, 'large-wide'];

  /** @override **/
  this.animationTimer.delay = fps;
}

LargeWideStar.prototype = Object.create(Star.prototype);

module.exports = LargeWideStar;
