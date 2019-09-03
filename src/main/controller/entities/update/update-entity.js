const updateBackgroundEntity = require('./background/update-background-entity');
const updateBaseEntity = require('./base/update-base-entity');
const updateGameEntity = require('./game/update-game-entity');

function update(entity, idx, dt) {
  entity.actions.forEach(action => action(entity, idx, dt));
}

module.exports = update;
module.exports.base = updateBaseEntity;
module.exports.bg = updateBackgroundEntity;
module.exports.game = updateGameEntity;
