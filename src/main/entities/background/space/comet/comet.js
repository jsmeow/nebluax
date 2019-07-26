const canvas = require('../../../../canvas');
const MovingEntity = require('../../../base/moving');
const { grey } = require('../../../../../static/muiColors');

// A shooting star comet.
function Comet() {
  MovingEntity.call(this);

  /** @override **/
  this.x = Math.random() * canvas.width;

  /** @override **/
  this.y = Math.random() * -canvas.height + canvas.height;

  /** @override **/
  this.width = canvas.width / 750;

  /** @override **/
  this.height =
    (Comet.gradient.length * canvas.height) / (350 * Comet.gradient.length);

  /** @override **/
  this.vector.magnitude = 0.5;

  /** @override **/
  this.vector.delay = 0.05;
  this.init();
}

Comet.prototype = Object.create(MovingEntity.prototype);

Comet.prototype.init = function() {
  this.moveVector({ down: this.vector.magnitude });
};

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
  if (this.collidesBoundary().bottom(-this.height * Comet.gradient.length)) {
    this.reset();
  }
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
