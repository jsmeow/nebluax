// Entity types and subtypes.
const types = {
  NONE: {
    ID: 'none'
  },
  BACKGROUND: {
    ID: 'background',
    SPACE: {
      ID: 'space',
      COMET: 'comet',
      NEBULA: {
        ID: 'nebula',
        1: '1'
      },
      SPACE: 'space',
      STAR: {
        ID: 'star',
        SMALL: {
          ID: 'small',
          BLINKING: 'blinking',
          PURPLE: {
            ID: 'purple',
            LIGHT_PURPLE: 'light-purple',
            DARK_PURPLE: 'dark-purple'
          },
          RED: {
            ID: 'red',
            LIGHT_RED: 'light-red',
            DARK_RED: 'dark-red'
          },
          WHITE: 'white'
        },
        MEDIUM: {
          ID: 'medium',
          WHITE: {
            ID: 'white',
            3: '3',
            5: '5',
            7: '7'
          }
        }
      }
    }
  },
  EFFECT: {
    ID: 'effect',
    EXPLOSION: {
      ID: 'explosion',
      DAMAGE: 'damage',
      DESTROY: 'destroy'
    }
  },
  PROJECTILE: {
    ID: 'projectile',
    BOMB: {
      ID: 'bomb',
      STANDARD: 'standard'
    },
    MINE: {
      ID: 'mine',
      STANDARD: 'standard'
    },
    BULLET: {
      ID: 'bullet',
      HOMING: 'homing',
      STANDARD: 'standard'
    }
  },
  SHIP: {
    ID: 'ship',
    BOSS: {
      ID: 'boss',
      CONDOR: 'condor'
    },
    SMALL: {
      ID: 'small',
      ALBATROSS: 'albatross',
      ASTEROID: 'asteroid',
      BOWERBIRD: 'bowerbird',
      FLYCATCHER: 'flycatcher',
      GULL: 'gull',
      HERON: 'heron',
      MALLARD: 'mallard',
      ORIOLE: 'oriole',
      PLAYER: 'player',
      SWALLOW: 'swallow',
      WARBLER: 'warbler',
      WIGEON: 'wigeon'
    }
  }
};

module.exports = types;
