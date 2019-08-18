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
  imageSources,
  degrees,
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
    degrees,
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

  // Bullet creation method.
  // Creates bullet(s) entities at an interval.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createBullets = function() {};

  // Bomb creation method.
  // Creates bomb(s) entities.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createBombs = function() {};

  // Mine creation method.
  // Creates mine(s) entities.
  // Extending ship entity classes are expected to implement this method if
  // They are to fire bullets.
  this.createMines = function() {};

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

  /** @override **/
  this.updateTimers = function() {
    this.updateBulletTimer();
  };

  /** @override **/
  this.postUpdate = function() {
    if (this.status.collided) {
      factory.explosion.destroyExplosion({
        x: this.x,
        y: this.y,
        faction: this.faction
      });
    }
  };

  /** @override **/
  this.loadImage = function() {
    // This entity can use multiple images sources
    // On render, the entity will be conditionally assigned one of the image
    // Sources depending on the entity status/event.

    if (this.faction === 'allied') {
      this.image.src = imageSources.allied;
    }

    if (this.faction === 'enemy') {
      this.image.src = imageSources.enemy;
    }

    if (this.faction === 'neutral') {
      this.image.src = imageSources.neutral;
    }

    if (this.status.damaged) {
      this.image.src = imageSources.damaged;
    }

    if (this.status.shielded) {
      this.image.src = imageSources.shielded;
    }

    if (this.status.powered) {
      this.image.src = imageSources.powered;
    }
  };
}

Ship.prototype = Object.create(Entity.prototype);

module.exports = Ship;
