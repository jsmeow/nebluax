const BackgroundEntityFactory = require('./type/background-entity-factory');
const enums = require('../../../enum/enums');

// The types of entities the entity factory can produce will be the same as
// the entity types enum values
function EntityFactory() {}

// Create the entity factories by entity types
EntityFactory.prototype.createFactories = function() {
  return [['bg', BackgroundEntityFactory, enums.ENTITIES.TYPE.BG]].reduce(
    (factories, [key, Factory, setListIdx]) => {
      const factory = new Factory(setListIdx);
      EntityFactory.prototype[key] = new Factory(setListIdx);
      return Object.assign(factories, { [key]: factory });
    },
    {}
  );
};

// Creates and an entity and returns it
EntityFactory.prototype.spawn = function(Entity, args, swap) {
  const list = this.setList[this.setListIdx];

  // Append the entities set list, factory and constructor metadata to the
  // entity arguments
  Object.assign(args, {
    name: Entity.name,
    constr: Entity,
    path: Entity.PATH,
    emoji: Entity.EMOJI,
    setList: this.setList,
    setListIdx: this.setListIdx,
    factory: this.createFactories()
  });

  return list.push(new Entity(args)) && swap
    ? list.unshift(list.pop()) && list[0]
    : list[list.length - 1];
};

module.exports = new EntityFactory();
