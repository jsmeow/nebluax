const canvas = require('../../../../canvas');
const MovingEntity = require('../../../moving');
const { grey } = require('../../../../../static/mui/muiColors');

// A shooting star comet.
function Comet({ x, y, width, height, entities, dx, dy } = {}) {
  MovingEntity.call(this, { x, y, width, height, entities, dx, dy });

  /** @override **/
  this.x = Math.random() * canvas.width;

  /** @override **/
  this.y = Math.random() * -canvas.height + canvas.height;

  /** @override **/
  this.width = canvas.width / 550;

  /** @override **/
  this.height = canvas.width / 550;

  /** @override **/
  this.dy = 1;
}

Comet.prototype = Object.create(MovingEntity.prototype);

// Opacity hex gradient. Obtained from
// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
Comet.gradient = ['B3', '99', '80', '66', '4D', '33', '1A', '00'];

// Get new canvas bounded random x, y position.
Comet.prototype.reset = function() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height * -1.5;
};

/** @override **/
Comet.prototype.update = function() {
  // Get new random position on bottom boundary collision.
  if (this.y + this.dy >= canvas.height - this.height * Comet.gradient.length) {
    this.reset();
  }

  // Move in vector.
  this.move();
};

/** @override **/
Comet.prototype.render = function() {
  // Comet is composed of k rectangles units where k is the gradient length.
  Comet.gradient.forEach((hex, idx) => {
    canvas.drawRect({
      x: this.x,
      y: this.y - idx * this.height,
      width: this.width,
      height: this.height,
      fillStyle: `${grey[50].light}${hex}`
    });
  });
};

module.exports = Comet;
