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

  /** @override **/
  this.preRender = function() {
    if (this.pos.y >= canvas.pixel * 320) {
      this.pos.y = 0;
    }
  };

  /** @override **/
  this.render = function() {
    this.preRender();

    [this.pos.y, this.pos.y - canvas.pixel * 320].forEach(y => {
      canvas.drawImage({
        obj: this.image.obj[this.image.timer.index],
        x: this.pos.x,
        y,
        width: this.dims.width,
        height: this.dims.height,
        deg: this.image.deg,
        alpha: this.image.alpha,
        sat: this.image.sat,
        hue: this.image.hue,
        luma: this.image.luma,
        con: this.image.con
      });
    });

    this.updateAnimationTimer();
    this.postRender();
  };
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
