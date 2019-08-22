const canvas = require('../../../canvas/canvas');
const DrawImageWorker = require('../../../canvas/worker/draw-image/draw-image-worker');
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

  // Create a second canvas draw image web worker handler to infinitely scroll
  // background
  this.drawImageWorker2 = new DrawImageWorker(
    { x: this.pos.x, y: -this.dims.height },
    this.dims,
    this.img
  );

  /** @override **/
  this.preRender = function() {
    if (this.pos.y >= this.dims.height) {
      this.pos.y = 0;
    }
  };

  /** @override **/
  this.render = function() {
    this.preRender();

    // Execute and update the draw image web worker handler
    this.drawImageWorker.exec();
    this.drawImageWorker2.exec();
    this.drawImageWorker.updateAnimationTimer();
    this.drawImageWorker2.updateAnimationTimer();
    this.drawImageWorker.pos = this.pos;
    this.drawImageWorker2.pos = {
      x: this.pos.x,
      y: this.pos.y - this.dims.height
    };

    this.postRender();
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
