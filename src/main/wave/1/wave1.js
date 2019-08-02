const canvas = require('../../canvas');
const types = require('../../entity/entity-types');
const Wave = require('../wave');
const factory = require('../../entity/entity-factory');

function Wave1(player, entities) {
  Wave.call(this, player, entities);

  this.init();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  this.waveEntities = [
    /*    Factory({
      x: canvas.width * 0.5 - 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.bowerbird(),*/
    /*    Factory({
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
    }).ship.heron(),
    factory({
      x: canvas.width * 0.5 - 60 * 4,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.swallow(),*/
    factory({
      x: canvas.width * 0.5 - 60 * 6,
      y: 60 * 6,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.condor()
    /*    Factory({
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
    }).ship.gull()*/
  ];

  this.waveEntities[0].prowl();
  /* This.waveEntities[1].prowl();
  this.waveEntities[2].patrol();*/
};

module.exports = Wave1;
