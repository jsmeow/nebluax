const { fps } = require('../../../../../../options');
const canvas = require('../../../../../../canvas');
const Star = require('../star');

function LargeStar({ x, y, width, height, imageSource }) {
  Star.call(this, {
    x,
    y,
    width: width || canvas.pixel * 5,
    height: height || canvas.pixel * 5,
    imageSource,
    maxDy: 0.8
  });

  this.props.type = [...this.props.type, 'large'];

  /** @override **/
  this.animationTimer.delay = fps;
}

LargeStar.prototype = Object.create(Star.prototype);

module.exports = LargeStar;
