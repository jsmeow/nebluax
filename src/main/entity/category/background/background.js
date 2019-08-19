const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Background({ imageSource, factory, list }) {
  Entity.call(this, {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height * 2,
    type: ['background'],
    imageSource,
    factory,
    list
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

    this.y = this.y + 0.5;
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
