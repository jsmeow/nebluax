const type = {
  EFFECT: 'effect',
  PROJECTILE: 'projectile',
  SHIP: 'ship'
};

const subtype = {
  effect: {
    COMET: 'comet',
    SPACE: 'space',
    STAR: 'star'
  },
  projectile: {
    BULLET: 'bullet',
    BOMB: 'bomb'
  },
  ships: {
    ALBATROSS: 'albatross',
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
};

const faction = {
  ALLIED: 'allied',
  ENEMY: 'enemy',
  NONE: 'none'
};

module.exports = {
  type,
  subtype,
  faction
};
