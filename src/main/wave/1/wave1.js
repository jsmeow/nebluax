const canvas = require('../../canvas');
const Wave = require('../wave');
const FactionedEntity = require('../../entity/factioned');
const Oriole = require('../../entity/ship/oriole/oriole');
const Mallard = require('../../entity/ship/mallard/mallard');
const Flycatcher = require('../../entity/ship/flycatcher/flycatcher');
const Warbler = require('../../entity/ship/warbler/warbler');
const Albatross = require('../../entity/ship/albatross/albatross');
const Bowerbird = require('../../entity/ship/bowerbird/bowerbird');

function Wave1(player, entities) {
  Wave.call(this, player, entities);

  this.init();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  this.waveEntities = [
    new Bowerbird({
      x: canvas.width * 0.5 - Bowerbird.width * 0.5,
      y: Bowerbird.height * 3,
      entities: this.entities,
      faction: FactionedEntity.factions.ENEMY
    })
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
};

module.exports = Wave1;
