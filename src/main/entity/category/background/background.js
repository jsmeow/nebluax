const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Background({ pos, dims, vector, props, status, points, img, meta }) {
  Entity.call(this, {
    pos,
    dims: dims || {
      width: canvas.width,
      height: canvas.height
    },
    vector,
    props: {
      ...props,
      type: [...props.type, 'background']
    },
    status,
    points,
    img,
    meta
  });

  // entities of entities that populate the background
  // Extending entity classes are are expected to override this property.
  this.entities = [];

  /** @override **/
  this.preRender = function() {
    if (this.pos.y >= this.dims.height) {
      this.pos.y = 0;
    }
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
