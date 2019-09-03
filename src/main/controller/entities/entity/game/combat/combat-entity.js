const GameEntity = require('../game-entity');
const update = require('../../../update/update-entity');

function CombatEntity(args) {
  GameEntity.call(this, args);

  this.onCollision = update.game.collision.entity.event.combat;
}

CombatEntity.prototype = Object.create(GameEntity.prototype);

CombatEntity.PATH = `${GameEntity.PATH}/combat`;

module.exports = CombatEntity;
