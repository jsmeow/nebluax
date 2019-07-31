const canvas = require('../canvas');

// Properties to be implemented by the extending class.
function Entity(
  { x = 0, y = 0, width = 0, height = 0, entities = [] } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    entities: []
  }
) {
  // Position
  this.x = x;
  this.y = y;

  // Size
  this.width = width;
  this.height = height;

  // The entities list.
  this.entities = entities;

  // The application user/ / player.
  this.player = this.entities[0];

  // Image and image sources used by this entity.
  // To be provided by the extending class.
  this.image = new Image();
  this.imageSrc = null;

  // The statuses an entity can take.
  // Extending entities may implement more statuses.
  this.status = {};

  // Type of challenger.
  // Optional, allows for additional validation.
  this.type = '';
  this.subtype = '';
}

// Types of entities.
Entity.types = {
  PLAYER: 'player',
  PROJECTILE: 'projectile',
  SHIP: 'ship',
  EFFECT: 'effect'
};

// Subtypes of entities.
Entity.subtypes = {
  BULLET: 'bullet',
  BOMB: 'bomb'
};

// Initializer.
Entity.prototype.init = function() {
  this.loadImage();
};

// Load an image source into the image object.
// To be implemented by the extending class.
Entity.prototype.loadImage = function() {};

// Pre-update action.
// To be implemented by the extending class.
Entity.prototype.preUpdate = function(idx) {};

// Start or tick any entity timer action.
// To be implemented by the extending class.
Entity.prototype.tick = function(idx) {};

// Dispose entity action.
// To be implemented by the extending class.
Entity.prototype.dispose = function(idx) {};

// Remove this entity instance from the entities list.
Entity.prototype.remove = function(idx) {
  this.entities.splice(idx, 1);
};

// Update action.
// To be implemented by the extending class.
Entity.prototype.update = function(idx) {};

// Render action.
Entity.prototype.render = function() {
  canvas.drawImage({
    image: this.image,
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  });
};

module.exports = Entity;
