const Entity = require('../../entity');

function Background({ pos, dims, vector, props, status, points, img, meta }) {
  Entity.call(this, {
    pos,
    dims: dims || {
      width: 320,
      height: 320
    },
    vector,
    props: {
      type: ['bg', 'bg-image', ...props.type]
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
