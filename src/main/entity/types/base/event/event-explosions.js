const { fps } = require('../../../../options');
const factory = require('../../../factory/factory-entity');
const properties = require('../../../properties/properties-entity');

// Create an effect entity around the entity.
// Can be overridden by the extending entity for a different effect action.
function explosionsCreate({ creator, width, height, ...args }) {
  const orientation = creator.faction === properties.factions.ALLIED ? 1 : -1;

  factory.explosion.destroy({
    x: this.randomInteger(
      creator.x - (width || creator.width) * 0.5,
      creator.x + (height || creator.width) * 0.5
    ),
    y: this.randomInteger(
      creator.y - creator.height * orientation * 0.8,
      creator.y + creator.height * orientation * 0.8
    ),
    width,
    height,
    creator,
    ...args
  });
}

// Create an effect entity around the entity after a delay.
// !warning! This is an async action unaffected by the application loop.
function explosionsStart({ amount, ...args }) {
  const promises = [...Array(amount)].map((value, index) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Create effect.
        this.explosionsCreate(args);

        resolve();
      }, fps * 1.5 * index);
    });
  });

  // Return resolved promise list.
  return Promise.all(promises);
}

module.exports = {
  explosionsCreate,
  explosionsStart
};
