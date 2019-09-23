const updateGameEntityCollision = require('./collision/update-game-entity-collision');
const updateGameEntityDeath = require('./death/update-game-entity-death');
const updateShieldEntityPosition = require('./position/update-shield-entity-position');

module.exports = {
  collision: updateGameEntityCollision,
  death: updateGameEntityDeath,
  position: {
    shield: updateShieldEntityPosition
  }
};
