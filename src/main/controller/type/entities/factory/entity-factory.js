const BackgroundEntityFactory = require('./type/background-entity-factory');
const DisplayEntityFactory = require('./type/display-entity-factory');
const GameEntityFactory = require('./type/game-entity-factory');
const enums = require('../../../enum/enums');

// The types of entities the entity factory can produce will be the same as
// the entity types enum values
function EntityFactory() {
  // The entity factories by entity types
  this.factories = {};
}

// Initialize the entity factory
EntityFactory.prototype.init = function(setList) {
  // Factory keys
  const keys = Object.keys(enums.ENTITIES.TYPE).map(key => key.toLowerCase());

  // Mixin main entity factory properties and methods to child entity factories
  const Factories = [
    BackgroundEntityFactory,
    DisplayEntityFactory,
    GameEntityFactory
  ].map(Factory => {
    Factory.prototype.setList = setList;
    Factory.prototype.factories = this.factories;
    Factory.prototype.spawn = EntityFactory.prototype.spawn;
    Factory.prototype.constructor = Factory;
    return Factory;
  });

  // Create the entity factories
  Object.assign(this.factories, {
    [keys[enums.ENTITIES.TYPE.BG]]: new Factories[enums.ENTITIES.TYPE.BG](
      enums.ENTITIES.TYPE.BG
    ),
    [keys[enums.ENTITIES.TYPE.GAME]]: new Factories[enums.ENTITIES.TYPE.GAME](
      enums.ENTITIES.TYPE.GAME
    )
  });
};

// Creates and an entity and returns it
EntityFactory.prototype.spawn = function(Entity, args = {}, swap) {
  const list = this.setList[this.setListIdx];

  // Append the entities set list, factory and constructor metadata to the
  // entity arguments
  Object.assign(args, {
    name: Entity.name,
    constr: Entity,
    path: Entity.PATH,
    emoji: args.emoji || Entity.EMOJI,
    setList: this.setList,
    setListIdx: this.setListIdx,
    factory: this.factories
  });

  return list.push(new Entity(args)) && swap
    ? list.unshift(list.pop()) && list[0]
    : list[list.length - 1];
};

module.exports = new EntityFactory();
