const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Background({ pos, dims, vector, props, status, points, image, meta }) {
  Entity.call(this, {
    pos,
    dims: dims || {
      width: canvas.width,
      height: canvas.height * 2
    },
    vector: {
      ...vector,
      speed: 0.5,
      dy: 1
    },
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

  /** @override **/
  this.preRender = function() {
    if (this.pos.y === canvas.height * 2) {
      this.pos.y = 0;
    }
  };

  /** @override **/
  this.render = function() {
    this.preRender();

    canvas.drawImage({
      image: this.image.obj[this.image.timer.index],
      x: this.pos.x,
      y: this.pos.y - canvas.height * 2,
      width: this.dims.width,
      height: this.dims.height,
      deg: this.image.deg
    });

    canvas.drawImage({
      image: this.image.obj[this.image.timer.index],
      x: this.pos.x,
      y: this.pos.y,
      width: this.dims.width,
      height: this.dims.height,
      deg: this.image.deg
    });

    this.updateAnimationTimer();
    this.postRender();
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
