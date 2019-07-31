const canvas = require('../../canvas');
const Entity = require('../entity');
const Comet = require('./space/comet/comet');
const Star = require('./space/star/star');

function Space({ x, y, width, height, entities }) {
  Entity.call(this, { x, y, width, height, entities });

  /** @override **/
  this.x = 0;
  this.y = 0;

  /** @override **/
  this.width = canvas.width;
  this.height = canvas.height;

  // The comet entities list.
  this.comets = [];

  // The stars entities list.
  this.stars = [];

  this.init();
}

Space.prototype = Object.create(Entity.prototype);

// Initialize.
Space.prototype.init = function() {
  // Create the comets entities.
  this.comets = [...Array(30)].map(() => {
    return new Comet();
  });

  // Create the star entities.
  this.stars = [...Array(30)].map(() => {
    return new Star();
  });
};

/** @override **/
Space.prototype.update = function() {
  this.comets.forEach(comet => {
    comet.update();
  });

  this.stars.forEach(star => {
    star.update();
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

  // Draw the stars.
  this.stars.forEach(star => {
    star.render();
  });
};

module.exports = Space;
