const { fps } = require('../../../../../../../options');
const canvas = require('../../../../../../../canvas');
const properties = require('../../../../../../properties/properties-entity');
const Entity = require('../../../../../base/entity');

// A shooting star comet.
function SmallBlinkingStarEntity() {
  Entity.call(this);

  /** @override **/
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height + canvas.height;

  /** @override **/
  this.width = properties.sizes.BACKGROUND.SPACE.STAR.SMALL.WIDTH;
  this.height = properties.sizes.BACKGROUND.SPACE.STAR.SMALL.HEIGHT;

  /** @override **/
  this.dx = 0;
  this.dy = 1;

  /** @override **/
  this.type = [
    properties.types.BACKGROUND.ID,
    properties.types.BACKGROUND.SPACE.ID,
    properties.types.BACKGROUND.SPACE.STAR.ID,
    properties.types.BACKGROUND.SPACE.STAR.SMALL.ID,
    properties.types.BACKGROUND.SPACE.STAR.SMALL.BLINKING
  ];

  // Blinking delay timer.
  this.blink = {
    frame: 0,
    delay: fps / 10
  };

  // Current blinking color.
  this.color = null;

  // Get new canvas bounded random x, y position.
  this.reset = function() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * -1;
  };

  /** @override **/
  this.update = function() {
    // Get new random position on bottom boundary collision.
    if (this.validateBoundary().bottom) {
      this.reset();
    }

    // Move in vector.
    this.vectorMove();
  };

  /** @override **/
  this.render = function() {
    if (this.blink.frame <= this.blink.delay / 4) {
      this.color = SmallBlinkingStarEntity.colors[0];
    } else if (this.blink.frame <= (this.blink.delay * 2) / 4) {
      this.color = SmallBlinkingStarEntity.colors[1];
    } else if (this.blink.frame <= (this.blink.delay * 3) / 4) {
      this.color = SmallBlinkingStarEntity.colors[2];
    } else if (this.blink.frame === this.blink.delay) {
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
}

SmallBlinkingStarEntity.prototype = Object.create(Entity.prototype);

// Opacity hex gradient. Obtained from
// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
SmallBlinkingStarEntity.colors = ['red', 'blue', 'yellow'];

module.exports = SmallBlinkingStarEntity;
