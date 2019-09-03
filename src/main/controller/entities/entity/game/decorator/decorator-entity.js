const GameEntity = require('../game-entity');
const enums = require('../../../../../enums/enums');

function DecoratorEntity(args) {
  GameEntity.call(
    this,
    Object.assign(args, {
      faction: DecoratorEntity.FACTION,
      invincible: DecoratorEntity.INVINCIBLE
    })
  );
}

DecoratorEntity.prototype = Object.create(GameEntity.prototype);

DecoratorEntity.PATH = `${GameEntity.PATH}/decorator`;
DecoratorEntity.FACTION = enums.entity.faction.NONE;
DecoratorEntity.INVINCIBLE = true;

module.exports = DecoratorEntity;
