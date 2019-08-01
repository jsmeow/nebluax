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
    factory({
      x: canvas.width * 0.5 - 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.bowerbird(),
    factory({
      x: canvas.width * 0.5 + 60 * 2,
      y: 60 * 3,
      entities: this.entities,
      faction: types.faction.ENEMY
    }).ship.gull()
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

    /* New Albatross({
      x: canvas.width * 0.5 - Albatross.width * 4,
      y: Albatross.height * 3,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player
    }),*/
    /* New Warbler({
      x: canvas.width * 0.5 + Albatross.width * 4,
      y: Albatross.height * 3,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player
    }),*/
    /* New Flycatcher({
      x: canvas.width * 0.5 + Albatross.width * 4,
      y: Albatross.height * 5,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player
    }),*/
    /* New Mallard({
      x: canvas.width * 0.5 + Albatross.width * 4,
      y: Albatross.height * 7,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player,
      entities: this.entities
    }),*/
    /*    New Oriole({
      x: canvas.width * 0.5 + -Albatross.width * 4,
      y: Albatross.height * 7,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player,
      entities: this.entities
    })*/
  ];

  this.waveEntities[0].prowl();
  this.waveEntities[1].prowl();
};

module.exports = Wave1;
