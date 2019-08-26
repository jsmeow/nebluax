// The types of entities the entity factory can produce will be the same as
// the valid entity types enum
function EntityFactory({ setList, setListIdx, factory }) {
  Object.assign(this, {
    setList,
    setListIdx,
    factory
  });
}

// Creates and an entity and returns it
EntityFactory.prototype.spawn = function(Entity, args, swap) {
  const list = this.setList[this.setListIdx];

  return list.push(
    new Entity({
      ...args,
      name: Entity.name,
      setList: this.setList,
      setListIdx: this.setListIdx,
      factory: this.factory
    })
  ) && swap
    ? list.unshift(list.pop()) && list[0]
    : list[list.length - 1];
};

module.exports = EntityFactory;
