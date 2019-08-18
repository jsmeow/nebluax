const { fps } = require('../../../../../options');
const canvas = require('../../../../../canvas');
const Ship = require('../../ship');
const BlueShipTrail = require('../../../ship-trail/blue/blue-ship-trail');
const StandardBullet = require('../../../bullet/standard/standard-bullet');
const StandardBomb = require('../../../explosive/bomb/standard/standard-bomb');
const StandardMine = require('../../../explosive/mine/standard/standard-mine');
const allied1 =
  './main/entity/category/ship/small/player/assets/images/allied/allied1.png';
const allied2 =
  './main/entity/category/ship/small/player/assets/images/allied/allied2.png';
const allied3 =
  './main/entity/category/ship/small/player/assets/images/allied/allied3.png';
const allied4 =
  './main/entity/category/ship/small/player/assets/images/allied/allied4.png';

// The Player entity.
function Player(factory, list) {
  Ship.call(this, {
    x: canvas.width * 0.5 - canvas.pixel * 15 * 0.5,
    y: canvas.height - canvas.pixel * 15 * 2,
    width: Player.width,
    height: Player.height,
    speed: 2,
    faction: 'allied',
    factory,
    list
  });

  /** @override **/
  this.type = [...this.type, 'player'];

  /** @override **/
  this.points = {
    ...this.points,
    health: 3,
    maxHealth: 3,
    attack: 1,
    life: 3,
    maxLife: 3,
    shield: 3,
    maxShield: 3,
    power: 3,
    maxPower: 3,
    bomb: 3,
    maxBomb: 3,
    mine: 3,
    maxMine: 3
  };

  // Flags whether already moving in a specific vector direction.
  // This is necessary to avoid a delay during a keydown event.
  this.moveVectorDirection = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  // Image source objects used
  const imageSources = [allied1, allied2, allied3, allied4];

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
    delay: fps
  };

  // Create a ship trail entity
  factory.shipTrail.blueShipTrail({
    getTrailX: () => {
      return this.x + this.width * 0.5 - BlueShipTrail.width * 0.5;
    },
    getTrailY: () => {
      return this.y + this.height - canvas.pixel * 2;
    },
    creator: this
  });

  /** @override **/
  this.createBullets = function() {
    factory.bullet.standardBullet({
      x: this.x + this.width * 0.5 - StandardBullet.width * 0.5,
      y: this.y - canvas.pixel,
      creator: this
    });
  };

  /** @override **/
  this.createBombs = function() {
    factory.explosive.bomb.standardBomb({
      x: this.x + this.width * 0.5 - StandardBomb.width * 0.5,
      y: this.y - canvas.pixel,
      faction: this.faction,
      creator: this
    });
  };

  /** @override **/
  this.createMines = function() {
    factory.explosive.mine.standardMine({
      x: this.x + this.width * 0.5 - StandardMine.width * 0.5,
      y: this.y - canvas.pixel,
      faction: this.faction,
      creator: this
    });
  };

  /** @override **/
  this.updateTimers = function() {
    if (animationTimer.frame >= animationTimer.delay) {
      animationTimer.frame = 0;
    } else {
      animationTimer.frame = animationTimer.frame + 1;
    }

    this.updateBulletTimer();
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
      animationTimer.frame >= animationTimer.delay * 0.25 * imageIndex &&
      animationTimer.frame < animationTimer.delay * 0.25 * (imageIndex + 1)
    ) {
      imageIndex += 1;
    }
  };
}

Player.prototype = Object.create(Ship.prototype);

Player.width = canvas.pixel * 17;
Player.height = canvas.pixel * 17;

module.exports = Player;
