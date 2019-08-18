const { fps } = require('../../../options');
const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Explosion({
  x,
  y,
  width,
  height,
  faction,
  points,
  imageSources,
  list
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    type: ['explosion'],
    faction: faction || 'neutral',
    points,
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
    ...this.points
  };

  // Preload the image source objects onto the image objects
  // The image source objects are preloaded to buffer and optimize performance.
  // Extending entity classes are expected to implement the image source
  // Objects.
  /** @override **/
  this.image = [...Array(imageSources.length)].map((_, index) => {
    const image = new Image();
    image.src = imageSources[index];
    return image;
  });

  // The image to render in the image list
  let imageIndex = 0;

  // Animation timer
  const animationTimer = {
    frame: 0,
    delay: fps * 0.5
  };

  /** @override **/
  this.updateTimers = function() {
    if (animationTimer.frame >= animationTimer.delay) {
      animationTimer.frame = 0;

      this.status.alive = false;
      this.status.dispose = true;
    } else {
      animationTimer.frame = animationTimer.frame + 1;
    }
  };

  /** @override **/
  this.render = function() {
    if (imageIndex < this.image.length) {
      canvas.drawImage({
        image: this.image[imageIndex],
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        degrees: this.degrees
      });

      if (
        animationTimer.frame >= animationTimer.delay * 0.125 * imageIndex &&
        animationTimer.frame < animationTimer.delay * 0.125 * (imageIndex + 1)
      ) {
        imageIndex += 1;
      }
    }
  };
}

Explosion.prototype = Object.create(Entity.prototype);

module.exports = Explosion;
