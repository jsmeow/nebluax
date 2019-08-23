const { fps } = require('../../../../../options');
const canvas = require('../../../../../canvas');
const Ship = require('../ship');

function Player({ pos, dims, vector, status, timers, meta }) {
  Ship.call(this, {
    pos: pos || {
      x: canvas.width * 0.5 - Player.dims.width,
      y: canvas.height * 0.5 + Player.dims.height * 15
    },
    dims: dims || {
      width: Player.dims.width,
      height: Player.dims.height
    },
    vector,
    props: {
      faction: 'ally',
      type: ['player']
    },
    status,
    points: {
      health: 3,
      healthMax: 3,
      attack: 1,
      attackMax: 1,
      life: 3,
      lifeMax: 3,
      shield: 3,
      shieldMax: 3,
      shieldDurationMax: fps,
      power: 3,
      powerMax: 3,
      bomb: 3,
      bombMax: 3,
      mine: 3,
      mineMax: 3
    },
    img: {
      src: [
        './main/entity/type/game/ship/player/assets/images/basic/image-source-1.png',
        './main/entity/type/game/ship/player/assets/images/basic/image-source-2.png',
        './main/entity/type/game/ship/player/assets/images/basic/image-source-3.png',
        './main/entity/type/game/ship/player/assets/images/basic/image-source-4.png'
      ]
    },
    timers: timers || {
      shield: {
        frame: 0,
        delay: fps
      }
    },
    meta
  });

  // Flags whether already moving in a specific vector direction
  // This is necessary to avoid a delay during a keydown event.
  this.direction = {
    left: false,
    right: false,
    up: false,
    down: false
  };
}

Player.prototype = Object.create(Ship.prototype);

Player.dims = {
  width: 17,
  height: 17
};

module.exports = Player;
