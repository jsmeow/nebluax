const { fps } = require('../../../options');
const canvas = require('../../../canvas');
const Entity = require('../../entity');

function ShipTrail({
  width,
  height,
  getTrailX,
  getTrailY,
  creator,
  imageSources,
  degrees,
  list
}) {
  Entity.call(this, {
    x: getTrailX(),
    y: getTrailY(),
    width,
    height,
    type: ['ship-trail'],
    creator,
    degrees,
    list
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    invincible: true
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
    delay: fps * 0.2
  };

  /** @override **/
  this.updateTimers = function() {
    if (animationTimer.frame >= animationTimer.delay) {
      animationTimer.frame = 0;
    } else {
      animationTimer.frame = animationTimer.frame + 1;
    }
  };

  /** @override **/
  this.updatePosition = function() {
    this.x = getTrailX();
    this.y = getTrailY();
  };

  /** @override **/
  this.postUpdate = function() {
    if (this.creator.status.dispose) {
      this.status.dispose = true;
    }
  };

  /** @override **/
  this.render = function() {
    if (imageIndex >= this.image.length) {
      imageIndex = 0;
    }

    canvas.drawImage({
      image: this.image[imageIndex],
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: this.degrees
    });

    if (animationTimer.frame > animationTimer.delay * 0.5 * imageIndex) {
      imageIndex += 1;
    }
  };
}

ShipTrail.prototype = Object.create(Entity.prototype);

module.exports = ShipTrail;
