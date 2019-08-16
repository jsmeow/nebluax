const canvas = require('../../canvas');
const factions = require('./properties-factions');
const validation = require('../event/validate/validate-entity-collision');

// Entity position relative to places on the html5 canvas.
// Used mostly as a utility for positioning entities quickly.
const positions = {
  canvas: {
    center: {
      x: ({ width } = {}) => {
        return canvas.width * 0.5 - (width || 0) * 0.5;
      },
      y: ({ height } = {}) => {
        return canvas.height * 0.5 - (height || 0) * 0.5;
      }
    },
    playerSpawn: {
      x: ({ width }) => {
        return canvas.width * 0.5 - width * 0.5;
      },
      y: ({ height }) => {
        return canvas.height - height * 2;
      }
    },
    quadrant({ player }) {
      return {
        x: validation.validatePoint().right(player.x) ? 1 : -1,
        y: validation.validatePoint().down(player.y) ? 1 : -1
      };
    }
  },
  ship: {
    bow: {
      x: ({ creator, width }) => {
        return creator.x + creator.width * 0.5 - width * 0.5;
      },
      y: ({ faction, creator }) => {
        return faction === factions.ALLIED
          ? creator.y
          : creator.y + creator.height;
      }
    }
  }
};

module.exports = positions;
