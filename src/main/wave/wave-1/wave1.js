const factory = require('../../factory/factory/factory-entity');
const properties = require('../../controller/entities/entity/properties/properties-entity');
const Wave = require('../wave');

function Wave1() {
  Wave.call(this);

  this.initialize();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  const bowerbird = factory.ship.bowerbird({
    x: properties.positions.canvas.center.x(),
    y: properties.positions.canvas.center.y()
  });
  /* Const condor = factory.ship.condor({
    x: properties.positions.canvas.center.x(),
    y: properties.positions.canvas.center.y()
  });

  condor.patrol();*/
  /* This.waveEntities = [
    factory({
      x: canvas.width * 0.425,
      y: 60 * 6,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.condor(),
    factory({
      x: canvas.width / 2,
      y: 0,
      dy: 1,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.asteroid[1]()
    /!*    Factory({
      x: canvas.width * 0.5 - 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.bowerbird(),*!/
    /!*    Factory({
      x: canvas.width * 0.5 + 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.warbler(),
    factory({
      x: canvas.width * 0.5 + 60 * 4,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.heron(),*!/
    /!*    Factory({
      x: canvas.width * 0.425,
      y: 60 * 6,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.condor(),
    factory({
      x: 60,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.gull(),
    factory({
      x: canvas.width - 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.gull(),*!/
    /!*    Factory({
      x: canvas.width * 0.5,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.swallow()*!/
    /!*    Factory({
      x: canvas.width * 0.5 + 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.albatross(),
    factory({
      x: canvas.width * 0.5 + 60 * 4,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.heron(),
    factory({
      x: canvas.width * 0.5 - 60 * 4,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.swallow(),
    factory({
      x: canvas.width * 0.5 + 60 * 6,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.gull()*!/
  ];*/
};

/** @override **/
Wave1.prototype.createPaths = function() {
  // This.waveEntities[0].patrol(2);
  /* This.waveEntities[1].prowl(2);
  this.waveEntities[2].prowl(2);
  this.waveEntities[3].prowl(2);*/
};

module.exports = Wave1;
