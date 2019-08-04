const canvas = require('../../../../../canvas');
const properties = require('../../../../properties/properties-entity');
const Entity = require('../../../base/entity');
const { grey } = require('../../../../../../static/mui/muiColors');

// A shooting star comet.
function CometEntity() {
  Entity.call(this);

  /** @override **/
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height + canvas.height;

  /** @override **/
  this.width = properties.sizes.BACKGROUND.SPACE.COMET.WIDTH;
  this.height = properties.sizes.BACKGROUND.SPACE.COMET.HEIGHT;

  /** @override **/
  this.dx = 0;
  this.dy = 2.5;

  /** @override **/
  this.type = [
    properties.types.BACKGROUND.ID,
    properties.types.BACKGROUND.SPACE.ID,
    properties.types.BACKGROUND.SPACE.COMET
  ];

  // Get new canvas bounded random x, y position.
  this.reset = function() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * -1.5;
  };

  /** @override **/
  this.update = function() {
    // Get new random position on bottom boundary collision.
    if (
      this.y + this.dy >=
      canvas.height + this.height * CometEntity.gradient.length
    ) {
      this.reset();
    }

    // Move in vector.
    this.vectorMove();
  };

  /** @override **/
  this.render = function() {
    // CometEntity is composed of k rectangles units where k is the gradient
    // Length.
    CometEntity.gradient.forEach((hex, index) => {
      canvas.drawRect({
        x: this.x,
        y: this.y - index * this.height,
        width: this.width,
        height: this.height,
        fillStyle: `${grey[50].light}${hex}`
      });
    });
  };
}

CometEntity.prototype = Object.create(Entity.prototype);

// Opacity hex gradient. Obtained from
// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
CometEntity.gradient = ['B3', '99', '80', '66', '4D', '33', '1A', '00'];

module.exports = CometEntity;
