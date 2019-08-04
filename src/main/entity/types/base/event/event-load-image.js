const properties = require('../../../properties/properties-entity');

// Enable and perform event action.
// Load an image source into the image object.
// Can be overridden by the extending entity for a different event action.
function load(imageSource) {
  if (imageSource) {
    this.image.src = imageSource;
  }

  // If image source was not passed as a parameter, use the default image
  // Source.
  if (this.imageSources && this.imageSources.basic) {
    this.image.src = this.imageSources.basic;
  }

  // Set image source based on the entity faction if applicable.
  if (this.faction === properties.factions.ALLIED) {
    this.image.src = this.imageSources.allied;
  } else if (this.faction === properties.factions.ENEMY) {
    this.image.src = this.imageSources.enemy;
  }

  // Set image source based on the entity status if applicable.
  if (this.status.damaged) {
    this.image.src = this.imageSources.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSources.powered;
  } else if (this.status.shielded) {
    this.image.src = this.imageSources.shielded;
  }
}

module.exports = load;
