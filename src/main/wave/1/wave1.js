const canvas = require('../../canvas');
const Wave = require('../wave');
const FactionedEntity = require('../../entity/base/factioned');
const Narrowbill = require('../../entity/ship/narrowbill/narrowbill');

function Wave1(entities) {
  Wave.call(this, entities);

  this.init();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  this.waveEntities = [
    new Narrowbill({
      x: canvas.width * 0.5 - Narrowbill.width / 2,
      y: Narrowbill.height * 3,
      faction: FactionedEntity.factions.ENEMY
    })
  ];

  this.waveEntities[0].roam();

  // This.waveEntities[0].status.roaming = true;
};

module.exports = Wave1;
