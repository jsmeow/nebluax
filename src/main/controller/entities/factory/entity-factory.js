const BackgroundEntityFactory = require('./type/background-entity-factory');
const DisplayEntityFactory = require('./type/display-entity-factory');
const GameEntityFactory = require('./type/game-entity-factory');
const enums = require('../../../enums/enums');

// The types of entities the entity factory can produce will be the same as
// the entity types enum values
function EntityFactory() {
  // The entity factories by entity types
  this.factories = {};
}

// Initialize the entity factory
EntityFactory.prototype.init = function(setList) {
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
    bg: new Factories[0](enums.controller.entities.type.BG),
    game: new Factories[2](enums.controller.entities.type.GAME)
  });
};

// Creates and an entity and returns it
EntityFactory.prototype.spawn = function(Entity, args = {}, swap) {
  const list = this.setList[this.setListIdx];

  // Append the entities set list, factory and constructor metadata to the
  // entity arguments
  // If swap is set to true, send to the front of the set list.
  Object.assign(args, {
    name: args.name || Entity.name,
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
