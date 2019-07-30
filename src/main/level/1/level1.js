const Level = require('../level');
const Wave1 = require('../../wave/1/wave1');

// This entity can deal or suffer from status effects.
function Level1(player, entities) {
  Level.call(this, player, entities);

  this.init();
}

Level1.prototype = Object.create(Level.prototype);

/** @override **/
Level1.prototype.createWaves = function() {
  this.waves = [new Wave1(this.player, this.entities)];
};

module.exports = Level1;
