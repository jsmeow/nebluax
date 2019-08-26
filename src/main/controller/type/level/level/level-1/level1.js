const Level = require('../level');
const Wave1 = require('../../../../../wave/wave-1/wave1');

// This entity can deal or suffer from status effects.
function Level1() {
  Level.call(this);

  this.initialize();
}

Level1.prototype = Object.create(Level.prototype);

/** @override **/
Level1.prototype.createWaves = function() {
  this.waves = [new Wave1()];
};

module.exports = Level1;
