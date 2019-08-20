const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Background({ pos, dims, vector, props, status, points, image, meta }) {
  Entity.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel * 320,
      height: canvas.pixel * 320
    },
    vector,
    props: {
      ...props,
      type: [...props.type, 'background']
    },
    status,
    points,
    image,
    meta
  });

  // List of entities that populate the background
  // Extending entity classes are are expected to override this property.
  this.entities = [];
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
