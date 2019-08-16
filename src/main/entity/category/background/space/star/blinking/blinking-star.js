const { fps } = require('../../../../../../options');
const canvas = require('../../../../../../canvas');
const Star = require('../star');

function BlinkingStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 1
  });

  /** @override **/
  this.type = [...this.type, 'blinking'];

  // Render colors
  this.colors = ['red', 'blue', 'yellow'];

  // Current render color
  this.color = this.colors[0];

  // Change render color delay timer
  this.timer = {
    frame: 0,
    delay: fps / 10
  };

  /** @override **/
  this.updateTimers = function() {
    if (this.timer.frame <= this.timer.delay / 4) {
      this.color = this.colors[0];
    } else if (this.timer.frame <= (this.timer.delay * 2) / 4) {
      this.color = this.colors[1];
    } else if (this.timer.frame <= (this.timer.delay * 3) / 4) {
      this.color = this.colors[2];
    } else if (this.timer.frame >= this.timer.delay) {
      this.timer.frame = 0;
    }

    this.timer.frame = this.timer.frame + 1;
  };

  /** @override **/
  this.render = function() {
    canvas.drawRect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      fillStyle: this.color
    });
  };
}

BlinkingStar.prototype = Object.create(Star.prototype);

module.exports = BlinkingStar;
