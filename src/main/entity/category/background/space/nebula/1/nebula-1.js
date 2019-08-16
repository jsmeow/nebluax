const canvas = require('../../../../../../canvas');
const properties = require('../../../../../properties/properties-entity');
const Entity = require('../../../../../entity');
const basic =
  './main/entity/types/background/space/nebula/1/assets/images/basic.png';

// A shooting star comet.
function Nebula1Entity() {
  Entity.call(this);

  /** @override **/
  /* This.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height + canvas.height;*/

  this.x = canvas.width * 0.5;
  this.y = canvas.height * 0.5;

  /** @override **/
  this.width = properties.sizes.BACKGROUND.SPACE.NEBULA[1].WIDTH;
  this.height = properties.sizes.BACKGROUND.SPACE.NEBULA[1].HEIGHT;

  /** @override **/
  this.dx = 0;
  this.dy = 1;

  /** @override **/
  this.type = [
    properties.types.BACKGROUND.ID,
    properties.types.BACKGROUND.SPACE.ID,
    properties.types.BACKGROUND.SPACE.NEBULA.ID,
    properties.types.BACKGROUND.SPACE.NEBULA[1]
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
    // This.vectorMove();
  };
}

Nebula1Entity.prototype = Object.create(Entity.prototype);

module.exports = Nebula1Entity;
