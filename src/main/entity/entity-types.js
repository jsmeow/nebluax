const type = {
  EFFECT: 'effect',
  PROJECTILE: 'projectile',
  SHIP: 'ship'
};

const subtype = {
  effect: {
    COMET: 'comet',
    EXPLOSION: 'explosion',
    SPACE: 'space',
    STAR: 'star'
  },
  projectile: {
    BOMB: 'bomb',
    BULLET: 'bullet',
    MINE: 'mine'
  },
  ships: {
    ALBATROSS: 'albatross',
    BOWERBIRD: 'bowerbird',
    CONDOR: 'condor',
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
