const { fps } = require('../../../options');
const Entity = require('../../entity');

function Ship({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  status,
  points,
  imageSource,
  degrees,
  creator,
  factory,
  list
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    speed,
    dx,
    dy,
    type: ['ship'],
    faction,
    status,
    points,
    imageSource,
    degrees,
    creator,
    factory,
    list
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    firing: true,
    invincible: false,
    damaged: false,
    shielded: false,
    powered: false,
    roaming: false,
    prowling: false,
    patrolling: false
  };

  /** @override **/
  this.points = {
    health: 1,
    attack: 0,
    score: 0,
    value: 0
  };

  // Bullet fire/creation timer
  this.bulletTimer = {
    frame: 0,
    delay: fps
  };

  // Reference to the shield entity created by the ship entity
  this.shield = null;

  // Bullet creation
  // Creates bullet(s) entities at an interval.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createBullets = function() {};

  // Update the bullet timer
  // Separate method implemented rather than including it in the updateTimers
  // Method because some ship entity classes may override the updateTimers
  // Method and and may need to create/fire bullets.
  this.updateBulletTimer = function() {
    if (
      this.status.firing &&
      this.bulletTimer.frame >= this.bulletTimer.delay
    ) {
      this.createBullets();
      this.bulletTimer.frame = 0;
    } else {
      this.bulletTimer.frame = this.bulletTimer.frame + 1;
    }
  };

  // Bomb creation
  // Creates bomb(s) entities.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createBombs = function() {};

  // Mine creation
  // Creates mine(s) entities.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createMines = function() {};

  // Shield creation
  // Creates a shield entity around the ship entity
  this.createShield = function() {
    if (!this.shield) {
      this.shield = factory.shield.standardShield({
        creator: this
      });

      this.status.invincible = true;
      this.status.shielded = true;
    }
  };

  // Shield disposal
  // Disposes the ship entity current shield entity
  this.disposeShield = function() {
    if (this.shield) {
      this.shield.status.alive = false;
      this.shield.status.dispose = true;
      this.shield = null;

      this.status.invincible = false;
      this.status.shielded = false;
    }
  };

  /** @override **/
  this.updateTimers = function() {
    this.updateBulletTimer();
  };

  /** @override **/
  this.postUpdate = function() {
    if (this.status.collided) {
      factory.explosion.destroyExplosion({
        x: this.pos.x,
        y: this.pos.y,
        faction: this.faction
      });
    }
  };

  /** @override **/
  this.loadImage = function() {
    let imageSource;

    // Get the image source list based on the entity faction/status

    if (this.faction === 'allied') {
      imageSource = this.imageSource.allied;
    }

    if (this.faction === 'enemy') {
      imageSource = this.imageSource.enemy;
    }

    if (this.faction === 'neutral' || !this.faction) {
      imageSource = this.imageSource.neutral;
    }

    if (this.status.damaged) {
      imageSource = this.imageSource.damaged;
    }

    if (this.status.shielded) {
      imageSource = this.imageSource.shielded;
    }

    if (this.status.powered) {
      imageSource = this.imageSource.powered;
    }

    this.image.src = imageSource;
  };

  /** @override **/
  this.loadImages = function() {
    let imageSource;

    // Get the image source list based on the entity faction

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

Ship.prototype = Object.create(Entity.prototype);

module.exports = Ship;
