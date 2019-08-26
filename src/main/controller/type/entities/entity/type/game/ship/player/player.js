const { fps } = require('../../../../../../../../options');
const canvas = require('../../../../../controller/handler/canvas-handler');
const Ship = require('../ship');

function Player({ pos, dims, props, points, img, timers, ...args }) {
  Ship.call(this, {
    pos: pos || {
      x: canvas.dims.width * 0.5 - Player.dims.width * 0.5,
      y: canvas.dims.height * 0.5 + Player.dims.height * 3
    },
    dims: dims || {
      width: Player.dims.width,
      height: Player.dims.height
    },
    props: {
      faction: 'ally',
      type: ['player'],
      ...props
    },
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
      mineMax: 3,
      ...points
    },
    img: {
      src: Player.imgSrc.basic,
      ...img
    },
    timers: {
      shield: {
        frame: 0,
        delay: fps
      },
      ...timers
    },
    ...args
  });

  // The entity moving direction heading flags whether already moving in a
  // specific vector direction
  // This is necessary to avoid a delay during a keydown event.
  this.heading = {
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

Player.imgSrc = {
  basic: [
    './main/entity/type/game/ship/player/assets/images/basic/image-source-1.png',
    './main/entity/type/game/ship/player/assets/images/basic/image-source-2.png',
    './main/entity/type/game/ship/player/assets/images/basic/image-source-3.png',
    './main/entity/type/game/ship/player/assets/images/basic/image-source-4.png'
  ]
};

module.exports = Player;
