const canvas = require('../../canvas');

// Entity sizes relative to the html5 canvas.
const sizes = {
  BACKGROUND: {
    SPACE: {
      COMET: {
        WIDTH: canvas.pixel / 2,
        HEIGHT: canvas.pixel / 2
      },
      NEBULA: {
        1: {
          WIDTH: canvas.pixel * 63,
          HEIGHT: canvas.pixel * 63
        }
      },
      SPACE: {
        WIDTH: canvas.width,
        HEIGHT: canvas.height
      },
      STAR: {
        SMALL: {
          WIDTH: canvas.pixel,
          HEIGHT: canvas.pixel
        },
        MEDIUM: {
          3: {
            WIDTH: canvas.pixel * 3,
            HEIGHT: canvas.pixel * 3
          },
          5: {
            WIDTH: canvas.pixel * 5,
            HEIGHT: canvas.pixel * 5
          },
          7: {
            WIDTH: canvas.pixel * 7,
            HEIGHT: canvas.pixel * 7
          }
        }
      }
    }
  },
  EXPLOSION: {
    SMALL: {
      WIDTH: canvas.pixel * 9,
      HEIGHT: canvas.pixel * 9
    },
    LARGE: {
      WIDTH: canvas.pixel * 18,
      HEIGHT: canvas.pixel * 18
    }
  },
  PROJECTILE: {
    BULLET: {
      WIDTH: canvas.pixel,
      HEIGHT: canvas.pixel
    },
    BOMB: {
      WIDTH: canvas.pixel * 5,
      HEIGHT: canvas.pixel * 5
    },
    MINE: {
      WIDTH: canvas.pixel * 5,
      HEIGHT: canvas.pixel * 5
    }
  },
  SHIP: {
    SMALL: {
      WIDTH: canvas.pixel * 15,
      HEIGHT: canvas.pixel * 15
    },
    BOSS: {
      SMALL: {
        WIDTH: canvas.pixel * 27,
        HEIGHT: canvas.pixel * 18
      }
    }
  }
};

module.exports = sizes;
