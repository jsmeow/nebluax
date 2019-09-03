const gameEntityBulletTimer = require('./bullet/game-entity-bullet-timer');
const gameEntityCreateExplosionTimer = require('./create-explosion/game-entity-create-explosion-timer');
const gameEntityDamagedTimer = require('./damaged/game-entity-damaged-timer');

module.exports = {
  bullet: gameEntityBulletTimer,
  explosion: gameEntityCreateExplosionTimer,
  damaged: gameEntityDamagedTimer
};
