const canvas = require('../../../../canvas');
const { fps } = require('../../../../options');
const MovingEntity = require('../../../base/moving');

// A shooting star comet.
function Star() {
  MovingEntity.call(this);

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

  // Blinking duration timer.
  this.blink = {
    frame: 0,
    duration: fps / 10
  };

  // Current blinking color.
  this.color = null;
}

Star.prototype = Object.create(MovingEntity.prototype);

// Opacity hex gradient. Obtained from
// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
Star.colors = ['red', 'blue', 'yellow'];

// Get new canvas bounded random x, y position.
Star.prototype.reset = function() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height * -1.5;
};

/** @override **/
Star.prototype.update = function() {
  // Get new random position on bottom boundary collision.
  if (this.assertBoundaryCollision().bottom) {
    this.reset();
  }

  // Move in vector.
  this.move();
};

/** @override **/
Star.prototype.render = function() {
  if (this.blink.frame <= this.blink.duration / 4) {
    this.color = Star.colors[0];
  } else if (this.blink.frame <= (this.blink.duration * 2) / 4) {
    this.color = Star.colors[1];
  } else if (this.blink.frame <= (this.blink.duration * 3) / 4) {
    this.color = Star.colors[2];
  } else if (this.blink.frame === this.blink.duration) {
    this.blink.frame = 0;
  }

  this.blink.frame = this.blink.frame + 1;

  canvas.drawRect({
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height,
    fillStyle: this.color
  });
};

module.exports = Star;
