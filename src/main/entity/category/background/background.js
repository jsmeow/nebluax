const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Background() {
  Entity.call(this, {
    width: canvas.width,
    height: canvas.height,
    type: ['background']
  });

  // List of entities that populate the background.
  // Extending entity classes are are expected to override this property.
  // The rendering method override is left up the extending entity classes.
  this.entities = [];

  /** @override **/
  this.update = function() {
    this.entities.forEach(entity => {
      entity.update();
    });
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
