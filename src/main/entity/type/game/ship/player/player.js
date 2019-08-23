const { fps } = require('../../../../../options');
const canvas = require('../../../../../canvas');
const Ship = require('../ship');
const BlueShipTrail = require('../../ship-trail/blue/blue-ship-trail');
const StandardBullet = require('../../bullet/standard/standard-bullet');
const StandardBomb = require('../../explosive/bomb/standard/standard-bomb');
const StandardMine = require('../../explosive/mine/standard/standard-mine');
const allied1 =
  './main/entity/type/ship/player/assets/images/allied/allied1.png';
const allied2 =
  './main/entity/type/ship/player/assets/images/allied/allied2.png';
const allied3 =
  './main/entity/type/ship/player/assets/images/allied/allied3.png';
const allied4 =
  './main/entity/type/ship/player/assets/images/allied/allied4.png';
const shield1 =
  './main/entity/type/ship/player/assets/images/shield/shield1.png';
const shield2 =
  './main/entity/type/ship/player/assets/images/shield/shield2.png';
const shield3 =
  './main/entity/type/ship/player/assets/images/shield/shield3.png';

function Player(factory, entities) {
  Ship.call(this, {
    x: canvas.width * 0.5 - canvas.res * 15 * 0.5,
    y: canvas.height - canvas.res * 15 * 2,
    width: Player.width,
    height: Player.height,
    speed: 2,
    faction: 'allied',
    imgSrc: [
      [allied1, allied2, allied3, allied4],
      [],
      [],
      [],
      [shield1, shield2, shield3]
    ],
    factory,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'player'];

  /** @override **/
  this.points = {
    ...this.points,
    health: 3,
    maxHealth: 3,
    attack: 1,
    life: 3,
    maxLife: 3,
    shield: 3,
    shieldDuration: 5,
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

  // Shield expiration timer
  this.shieldTimer = {
    frame: 0,
    delay: fps * 2
  };

  // Create a ship trail entity
  factory.shipTrail.blueShipTrail({
    creator: this,
    getX: () => {
      return this.pos.x + this.dims.width * 0.5 - BlueShipTrail.width * 0.5;
    },
    getY: () => {
      return this.pos.y + this.dims.height - canvas.res * 2;
    }
  });

  // Update the shield expiration timer
  this.updateShieldTimer = function() {
    if (
      this.status.shielded &&
      this.shieldTimer.frame >= this.shieldTimer.delay
    ) {
      this.disposeShield();
      this.shieldTimer.frame = 0;
    } else if (this.status.shielded) {
      this.shieldTimer.frame = this.shieldTimer.frame + 1;
    }
  };

  /** @override **/
  this.createBullets = function() {
    factory.bullet.standardBullet({
      x: this.pos.x + this.dims.width * 0.5 - StandardBullet.width * 0.5,
      y: this.pos.y - canvas.res,
      creator: this
    });
  };

  /** @override **/
  this.createBombs = function() {
    factory.explosive.bomb.standardBomb({
      x: this.pos.x + this.dims.width * 0.5 - StandardBomb.width * 0.5,
      y: this.pos.y - canvas.res,
      faction: this.faction,
      creator: this
    });
  };

  /** @override **/
  this.createMines = function() {
    factory.explosive.mine.standardMine({
      x: this.pos.x + this.dims.width * 0.5 - StandardMine.width * 0.5,
      y: this.pos.y - canvas.res,
      faction: this.faction,
      creator: this
    });
  };

  /** @override **/
  this.createShield = function() {
    if (!this.shield && !this.status.shielded && this.points.shield > 0) {
      this.shield = factory.shield.standardShield({
        creator: this
      });

      this.points.shield = this.points.shield - 1;
      this.status.invincible = true;
      this.status.shielded = true;
    }
  };

  /** @override **/
  this.updateTimers = function() {
    this.updateShieldTimer();
    this.updateBulletTimer();
  };
}

Player.prototype = Object.create(Ship.prototype);

Player.width = canvas.res * 17;
Player.height = canvas.res * 17;

module.exports = Player;
