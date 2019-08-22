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
  imgSrc,
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
    imgSrc,
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
    let imgSrc;

    // Get the image source entities based on the entity faction

    if (this.faction === 'allied') {
      imgSrc = this.imgSrc[0];
    }

    if (this.faction === 'enemy') {
      imgSrc = this.imgSrc[1];
    }

    if (this.faction === 'neutral' || !this.faction) {
      imgSrc = this.imgSrc[2];
    }

    this.image = [...Array(imgSrc.length)].map((_, index) => {
      const image = new Image();
      image.src = imgSrc[index];
      return image;
    });
  };
}

Bullet.prototype = Object.create(Entity.prototype);

module.exports = Bullet;
