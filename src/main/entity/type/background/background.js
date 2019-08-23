const options = require('../../../options');
const Entity = require('../../entity');

function Background({ pos, dims, vector, props, status, img, timers, meta }) {
  Entity.call(this, {
    pos,
    dims: dims || {
      width: Background.dims.width,
      height: Background.dims.height
    },
    vector,
    props: {
      type: ['bg', 'bg-image', ...props.type]
    },
    status,
    img,
    timers,
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

Background.dims = {
  width: options.res.width,
  height: options.res.height
};

module.exports = Background;
