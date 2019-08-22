const { fps } = require('../../../options');
const Entity = require('../../entity');

function Bullet({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  imageSource,
  degrees,
  creator,
  entities
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    speed: speed || 4,
    dx: dx || 0,
    dy: dy || creator.faction === 'enemy' ? 1 : -1,
    type: ['bullet'],
    faction: creator.faction,
    imageSource,
    degrees,
    creator,
    entities
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    invincible: true
  };

  /** @override **/
  this.points = {
    health: 1,
    attack: this.creator.points.attack,
    score: 0,
    value: 0
  };

  /** @override **/
  this.animationTimer.delay = fps * 0.2;

  /** @override **/
  this.postUpdate = function() {
    if (this.validateBoundaryCollision().all) {
      this.status.alive = false;
      this.status.dispose = true;
    }
  };

  /** @override **/
  this.loadImages = function() {
    let imageSource;

    // Get the image source entities based on the entity faction

    if (this.faction === 'allied') {
      imageSource = this.imageSource[0];
    }

    if (this.faction === 'enemy') {
      imageSource = this.imageSource[1];
    }

    if (this.faction === 'neutral' || !this.faction) {
      imageSource = this.imageSource[2];
    }

    this.image = [...Array(imageSource.length)].map((_, index) => {
      const image = new Image();
      image.src = imageSource[index];
      return image;
    });
  };
}

Bullet.prototype = Object.create(Entity.prototype);

module.exports = Bullet;
