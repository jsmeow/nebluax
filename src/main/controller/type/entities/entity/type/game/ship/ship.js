const Game = require('../game');

function Ship({ props, status, points, ...args }) {
  Game.call(this, {
    props: {
      type: ['ship', ...props.type],
      faction: props.faction || 'none'
    },
    status: {
      alive: true,
      invincible: false,
      collides: false,
      collided: false,
      ...status
    },
    points: {
      health: 0,
      attack: 0,
      value: 0,
      ...points
    },
    ...args
  });
}

Ship.prototype = Object.create(Game.prototype);

module.exports = Ship;
