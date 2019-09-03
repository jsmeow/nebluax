const updateGameEntityBoundaryCollision = require('./collision/boundary/update-game-entity-boundary-collision');
const updateGameEntityCollision = require('./collision/entity/update-game-entity-collision');
const updateGameEntityDeath = require('./death/update-game-entity-death');

module.exports = {
  collision: {
    boundary: updateGameEntityBoundaryCollision,
    entity: updateGameEntityCollision
  },
  death: updateGameEntityDeath
};
