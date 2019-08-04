const canvas = require('../../../../canvas');
const factions = require('../../../properties/properties-factions');
const types = require('../../../properties/properties-types');

// Returns a entity collision or collision event assertion.
function validateEntity() {
  return {
    event: (entity, index, _index) => {
      return (
        // Entity cannot reference itself.
        index !== _index &&
        // Both entities cannot be the same faction.
        this.faction !== entity.faction &&
        // One or both entities cannot be factionless.
        this.faction !== factions.NONE &&
        entity.faction !== factions.NONE &&
        !(
          this.type.includes(types.PROJECTILE.BULLET.ID) &&
          entity.type.includes(types.PROJECTILE.BULLET.ID)
        )
      );
    },
    collision: entity => {
      return (
        this.x <= entity.x + entity.width &&
        this.x + this.width >= entity.x &&
        this.y <= entity.y + entity.height &&
        this.y + this.height >= entity.y
      );
    }
  };
}

// Returns a boundary collision assertion.
function validateBoundary() {
  return {
    left: this.x - this.dx <= 0,
    right: this.x + this.dx >= canvas.width + this.width,
    top: this.y - this.dy <= 0,
    bottom: this.y + this.dy >= canvas.height - this.height,
    all:
      this.x - this.dx <= 0 ||
      this.x + this.dx >= canvas.width + this.width ||
      this.y - this.dy <= 0 ||
      this.y + this.dy >= canvas.height - this.height
  };
}

// Returns a x, y, point collision assertion.
function validatePoint() {
  return {
    left: x => {
      return this.x <= x;
    },
    right: x => {
      return this.x >= x;
    },
    up: y => {
      return this.y <= y;
    },
    down: y => {
      return this.y >= y;
    }
  };
}

module.exports = {
  validateEntity,
  validateBoundary,
  validatePoint
};
