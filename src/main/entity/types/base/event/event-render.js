const canvas = require('../../../../canvas');
const properties = require('../../../properties/properties-entity');

// Perform render event action.
function render() {
  this.loadImage();

  if (this.faction === properties.factions.ALLIED) {
    // Render an allied image.
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  } else if (this.faction === properties.factions.ENEMY) {
    // Render an enemy image rotated.
    canvas.drawImageRotated({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: Math.PI
    });
  } else
    canvas.drawImage({
      // Render a the basic default image.
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
}

module.exports = render;
