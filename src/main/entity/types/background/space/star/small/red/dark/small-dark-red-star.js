const canvas = require('../../../../../../../../canvas');
const properties = require('../../../../../../../properties/properties-entity');
const Entity = require('../../../../../../base/entity');
const basic =
  './main/entity/types/background/space/star/small/red/dark/assets/images/basic.png';

// A shooting star comet.
function SmallDarkRedStarEntity() {
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
    properties.types.BACKGROUND.SPACE.STAR.SMALL.RED,
    properties.types.BACKGROUND.SPACE.STAR.SMALL.RED.DARK_RED
  ];

  this.imageSources.basic = basic;

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
}

SmallDarkRedStarEntity.prototype = Object.create(Entity.prototype);

module.exports = SmallDarkRedStarEntity;
