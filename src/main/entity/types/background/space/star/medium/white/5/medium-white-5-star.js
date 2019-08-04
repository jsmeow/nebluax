const canvas = require('../../../../../../../../canvas');
const properties = require('../../../../../../../properties/properties-entity');
const Entity = require('../../../../../../base/entity');
const basic =
  './main/entity/types/background/space/star/medium/white/5/assets/images/basic.png';

// A shooting star comet.
function MediumWhite5StarEntity() {
  Entity.call(this);

  /** @override **/
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height + canvas.height;

  /** @override **/
  this.width = properties.sizes.BACKGROUND.SPACE.STAR.MEDIUM[5].WIDTH;
  this.height = properties.sizes.BACKGROUND.SPACE.STAR.MEDIUM[5].HEIGHT;

  /** @override **/
  this.dx = 0;
  this.dy = 1;

  /** @override **/
  this.type = [
    properties.types.BACKGROUND.ID,
    properties.types.BACKGROUND.SPACE.ID,
    properties.types.BACKGROUND.SPACE.STAR.ID,
    properties.types.BACKGROUND.SPACE.STAR.MEDIUM.ID,
    properties.types.BACKGROUND.SPACE.STAR.MEDIUM.WHITE.ID,
    properties.types.BACKGROUND.SPACE.STAR.MEDIUM.WHITE[7]
  ];

  this.imageSources.basic = basic;

  // Get new canvas bounded random x, y position.
  this.reset = function() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * -1.5;
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

MediumWhite5StarEntity.prototype = Object.create(Entity.prototype);

module.exports = MediumWhite5StarEntity;
