const canvas = require('../../canvas');
const Entity = require('../entity');
const Comet = require('./space/comet/comet');

// The space background.
function Space() {
  Entity.call(this);

  /** @override **/
  this.x = 0;
  this.y = 0;

  /** @override **/
  this.width = canvas.width;
  this.height = canvas.height;

  // The comet entities list.
  this.comets = [];
  this.init();
}

Space.prototype = Object.create(Entity.prototype);

// Initialize.
Space.prototype.init = function() {
  // Create the comets entities.
  this.comets = [...Array(30)].map(() => {
    return new Comet();
  });
};

/** @override **/
Space.prototype.update = function() {
  this.comets.forEach(comet => {
    comet.update();
  });
};

/** @override **/
Space.prototype.render = function() {
  // Draw the space background.
  canvas.drawRect({
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height,
    fillStyle: '#000000'
  });
  // Draw the comets.
  this.comets.forEach(comet => {
    comet.render();
  });
};

module.exports = Space;
