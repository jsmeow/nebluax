const { fps } = require('../../options');
const canvas = require('../../canvas');
const Entity = require('../entity');
const FactionedEntity = require('../factioned');

// An entity classified as a ship.
function Ship({ x, y, width, height, entities, dx, dy, faction }) {
  FactionedEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    dx,
    dy,
    faction
  });

  /** @override **/
  this.type = Entity.types.SHIP;

  /** @override **/
  this.status.firing = true;
}

Ship.prototype = Object.create(FactionedEntity.prototype);

// The x, y position of a ship entity locations.
// The x, y position of a ship entity in different positions on the canvas.
Ship.prototype.position = function() {
  return {
    bow: {
      x: this.x + this.width / 2,
      y: this.y + this.height
    },
    stern: {
      x: this.x + this.width / 2,
      y: this.y - this.height
    },
    center: {
      x: canvas.width * 0.5 - this.width * 0.5,
      y: canvas.height * 0.5 - this.height * 2
    },
    top: {
      left: {
        x: 0,
        y: 0
      },
      center: {
        x: canvas.width * 0.5 - this.width * 0.5,
        y: 0
      },
      right: {
        x: canvas.width - this.width,
        y: 0
      }
    },
    bottom: {
      left: {
        x: 0,
        y: canvas.height - this.height
      },
      center: {
        x: canvas.width * 0.5 - this.width * 0.5,
        y: canvas.height - this.height
      },
      right: {
        x: canvas.width - this.width,
        y: canvas.height - this.height
      }
    }
  };
};

// Create an pause in action.
// Used for prowling.
Ship.prototype.pause = function(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, fps * delay);
  });
};

module.exports = Ship;
