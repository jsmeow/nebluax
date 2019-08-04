const { fps } = require('../../../options');
const canvas = require('../../../canvas');
const properties = require('../../properties/properties-entity');
const Entity = require('../base/entity');

// This entity has no physical presence in the game.
// This entity cannot suffer from status effects.
function ExplosionEntity({
  x,
  y,
  width,
  height,
  faction,
  speed,
  dx,
  dy,
  type,
  status,
  points,
  timers,
  imageSources,
  creator
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    faction,
    speed,
    dx,
    dy,
    type,
    status,
    points,
    timers,
    imageSources,
    creator
  });

  /** @override **/
  this.width = width ? width : creator ? creator.width : ExplosionEntity.WIDTH;
  this.height = height
    ? height
    : creator
    ? creator.height
    : ExplosionEntity.HEIGHT;

  /** @override **/
  this.faction = faction || properties.factions.NONE;

  /** @override **/
  this.type = [
    properties.types.EFFECT.ID,
    properties.types.EFFECT.EXPLOSION.ID
  ];

  /** @override **/

  this.status.invincible = true;

  // Explosion timer.
  this.timer = {
    frame: 0,
    delay: this.timers.status.damaged.delay
  };

  /** @override **/
  this.loadImage = function() {
    if (this.timer.frame < this.timer.delay * 0.25) {
      this.image.src = this.imageSources.explosions[0];
    }
    if (
      this.timer.frame >= this.timer.delay * 0.25 &&
      this.timer.frame < this.timer.delay * 0.5
    ) {
      this.image.src = this.imageSources.explosions[1];
    }
    if (
      this.timer.frame >= this.timer.delay * 0.5 &&
      this.timer.frame < this.timer.delay * 0.75
    ) {
      this.image.src = this.imageSources.explosions[2];
    }
    if (
      this.timer.frame >= this.timer.delay * 0.75 &&
      this.timer.frame < this.timer.delay
    ) {
      this.image.src = this.imageSources.explosions[3];
    }

    this.timer.frame = this.timer.frame + 1;
  };

  /** @override **/
  this.updatePre = function() {
    if (this.timer.frame > this.timer.delay) {
      this.status.alive = false;
    }
  };

  /** @override **/
  this.render = function() {
    this.loadImage();

    // Render a the basic default image.
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  };
}

ExplosionEntity.prototype = Object.create(Entity.prototype);

// Size
ExplosionEntity.WIDTH = properties.sizes.EXPLOSION.SMALL.WIDTH;
ExplosionEntity.HEIGHT = properties.sizes.EXPLOSION.SMALL.HEIGHT;

module.exports = ExplosionEntity;
