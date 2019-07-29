const { fps } = require('../../options');
const Entity = require('../entity');

// This entity has no physical presence in the game.
// This entity cannot suffer from status effects.
function Explosion({ x, y, width, height }) {
  Entity.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = [];

  /** @override **/
  this.type = Entity.types.EFFECT;

  /** @override **/
  this.status = {
    invincible: true
  };

  /** @override **/
  this.points = {
    health: 1,
    attack: 0
  };

  // Frame and animation duration.
  this.frame = 0;
  this.duration = fps / 4;
}

Explosion.prototype = Object.create(Entity.prototype);

/** @override **/
Explosion.prototype.loadImage = function() {
  if (this.frame <= this.duration / 5) {
    this.image.src = this.imageSrc[0];
  } else if (this.frame <= (this.duration * 2) / 5) {
    this.image.src = this.imageSrc[1];
  } else if (this.frame <= (this.duration * 3) / 5) {
    this.image.src = this.imageSrc[2];
  } else if (this.frame <= (this.duration * 4) / 5) {
    this.image.src = this.imageSrc[3];
  }
};

/** @override **/
Explosion.prototype.update = function(entities, idx) {
  // Animate for a duration.
  if (this.frame < this.duration) {
    this.loadImage();

    // Increment timer.
    this.frame = this.frame + 1;
  } else {
    // Remove from the entities list.
    this.remove(entities, idx);
  }
};

module.exports = Explosion;
