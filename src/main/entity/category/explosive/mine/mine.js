const { fps } = require('../../../../options');
const canvas = require('../../../../canvas');
const Explosive = require('../explosive');

function Mine({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  imageSources,
  creator,
  factory,
  list
}) {
  Explosive.call(this, {
    x,
    y,
    width,
    height,
    speed,
    dx,
    dy,
    faction,
    creator,
    factory,
    list
  });

  /** @override **/
  this.type = [...this.type, 'mine'];

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
    } else {
      animationTimer.frame = animationTimer.frame + 1;
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
      height: this.height
    });

    if (
      animationTimer.frame >= animationTimer.delay * 0.09 * imageIndex &&
      animationTimer.frame < animationTimer.delay * 0.09 * (imageIndex + 1)
    ) {
      imageIndex += 1;
    }
  };
}

Mine.prototype = Object.create(Explosive.prototype);

module.exports = Mine;
