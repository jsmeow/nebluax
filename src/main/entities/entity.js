const canvas = require('../canvas');

// Properties to be implemented by the extending class.
function Entity({ x, y, width, height } = {}) {
  // Position
  this.x = x;
  this.y = y;

  // Size
  this.width = width;
  this.height = height;

  // Image and image sources used by this entity.
  // To be provided by the extending class.
  this.image = new Image();
  this.imageSrc = null;
}

// Load an image source into the image object.
Entity.prototype.loadImage = function() {
  this.image.src = this.imageSrc;
};

// Update action.
// To be implemented by the extending class.
Entity.prototype.update = function() {
  // ...implementation
};

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
