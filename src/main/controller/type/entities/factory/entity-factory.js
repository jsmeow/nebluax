const log = require('../../../../util/log');
const { fctry } = require('../../../../util/emoji');

// The types of entities the entity factory can produce will be the same as
// the valid entity types enum
function EntityFactory(idx) {
  // The index of the type of entity to create in the entity types enum
  this.idx = idx;
}

// Creates and an entity and returns it
EntityFactory.prototype.spawn = function(Entity, args, swap) {
  const list = this.setList[this.idx];

  log.spawn(`${fctry} a ${Entity.name} entity has been spawned`);

  return list.push(
    new Entity({
      ...args,
      name: Entity.name,
      setListType: this.types[this.idx],
      setListTypes: this.types,
      setList: this.setList,
      setListIdx: this.idx,
      factory: this,
      canvas: this.canvas
    })
  ) && swap
    ? list.unshift(list.pop()) && list[0]
    : list[list.length - 1];
};

module.exports = EntityFactory;
