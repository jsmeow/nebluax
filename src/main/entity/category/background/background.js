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

  /** @override **/
  this.render = function() {
    // Pre-render entity
    // Perform a render update before the render method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.preRender ? this.preRender() : null;

    this.img.ctx.drawImage(
      this.img.src[this.anim.index],
      this.pos.x,
      this.pos.y - this.dims.height,
      this.dims.width,
      this.dims.height
    );

    this.img.ctx.drawImage(
      this.img.src[this.anim.index],
      this.pos.x,
      this.pos.y,
      this.dims.width,
      this.dims.height
    );

    // Post-render entity
    // Perform a render update after the render method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.postRender ? this.postRender() : null;
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
