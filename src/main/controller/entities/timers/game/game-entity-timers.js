const gameEntityAccelerationTimer = require('./acceleration/game-entity-acceleration-timer');
const gameEntityBulletTimer = require('./bullet/game-entity-bullet-timer');
const gameEntityCreateExplosionTimer = require('./create-explosion/game-entity-create-explosion-timer');
const gameEntityDamagedTimer = require('./damaged/game-entity-damaged-timer');
const gameEntityShieldTimer = require('./shield/game-entity-shield-timer');

module.exports = {
  acceleration: gameEntityAccelerationTimer,
  bullet: gameEntityBulletTimer,
  explosion: gameEntityCreateExplosionTimer,
  damaged: gameEntityDamagedTimer,
  shield: gameEntityShieldTimer
};
