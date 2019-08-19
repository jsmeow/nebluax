const { fps } = require('../../../../../../options');
const canvas = require('../../../../../../canvas');
const Star = require('../star');

function MediumStar({ x, y, width, height, imageSource }) {
  Star.call(this, {
    x,
    y,
    width: width || canvas.pixel * 3,
    height: height || canvas.pixel * 3,
    imageSource,
    maxDy: 0.8
  });

  this.props.type = [...this.props.type, 'medium'];

  /** @override **/
  this.animationTimer.delay = fps;
}

MediumStar.prototype = Object.create(Star.prototype);

module.exports = MediumStar;
