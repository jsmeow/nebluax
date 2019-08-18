const { fps } = require('../../../options');
const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Bullet({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  imageSources,
  degrees,
  creator,
  list
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
    degrees,
    creator,
    list
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

  // Preload the image source objects onto the image objects
  // The image source objects are preloaded to buffer and optimize performance.
  // Extending entity classes are expected to implement the image source
  // Objects.
  /** @override **/
  this.image = {
    allied: [...Array(imageSources.allied.length)].map((_, index) => {
      const image = new Image();
      image.src = imageSources.allied[index];
      return image;
    }),
    enemy: [...Array(imageSources.enemy.length)].map((_, index) => {
      const image = new Image();
      image.src = imageSources.enemy[index];
      return image;
    }),
    neutral: [...Array(imageSources.neutral.length)].map((_, index) => {
      const image = new Image();
      image.src = imageSources.neutral[index];
      return image;
    })
  };

  // The image to render in the image list
  let imageIndex = 0;

  // Animation timer
  const animationTimer = {
    frame: 0,
    delay: fps / 5
  };

  /** @override **/
  this.updateTimers = function() {
    if (animationTimer.frame >= animationTimer.delay) {
      animationTimer.frame = 0;
    }

    animationTimer.frame = animationTimer.frame + 1;
  };

  /** @override **/
  this.postUpdate = function() {
    if (this.validateBoundaryCollision().all) {
      this.status.alive = false;
      this.status.dispose = true;
    }
  };

  /** @override **/
  this.render = function() {
    // Image object reference
    let image;

    switch (this.faction) {
      case 'allied':
        if (imageIndex >= this.image.allied.length) {
          imageIndex = 0;
        }
        image = this.image.allied[imageIndex];
        break;
      case 'enemy':
        if (imageIndex >= this.image.enemy.length) {
          imageIndex = 0;
        }
        image = this.image.enemy[imageIndex];
        break;
      case 'neutral':
        if (imageIndex >= this.image.neutral.length) {
          imageIndex = 0;
        }
        image = this.image.neutral[imageIndex];
        break;
      default:
    }

    canvas.drawImage({
      image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: this.degrees
    });

    if (animationTimer.frame >= animationTimer.delay * 0.5 * imageIndex) {
      imageIndex += 1;
    }
  };
}

Bullet.prototype = Object.create(Entity.prototype);

module.exports = Bullet;
