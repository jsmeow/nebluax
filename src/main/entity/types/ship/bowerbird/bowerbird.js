const properties = require('../../../properties/properties-entity');
const ShipEntity = require('../ship');
const allied = './main/entity/types/ship/bowerbird/assets/images/allied.png';
const enemy = './main/entity/types/ship/bowerbird/assets/images/enemy.png';
const damaged = './main/entity/types/ship/bowerbird/assets/images/damaged.png';

function BowerbirdEntity(args) {
  ShipEntity.call(this, { ...args });

  /** @override **/
  this.type = [
    properties.types.SHIP.ID,
    properties.types.SHIP.SMALL.ID,
    properties.types.SHIP.SMALL.BOWERBIRD
  ];

  /** @override **/
  this.imageSources.allied = allied;
  this.imageSources.enemy = enemy;
  this.imageSources.damaged = damaged;

  /** @override **/
  this.prowl = function(x, y) {
    return this.vectorPoint({ x: this.player.x, y: y + 150 })
      .then(() => {
        return this.pause(10);
      })
      .then(() => {
        return this.vectorPoint({ x: this.player.x, y: this.y });
      })
      .then(() => {
        return this.pause(10);
      })
      .then(() => {
        return this.vectorPoint({ x: this.player.x, y: this.y });
      })
      .then(() => {
        return this.pause(10);
      })
      .then(() => {
        return this.vectorPoint({ x, y });
      });
  };
}

BowerbirdEntity.prototype = Object.create(ShipEntity.prototype);

module.exports = BowerbirdEntity;
