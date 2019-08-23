const Entity = require('../../entity');

function Game({ pos, dims, vector, props, status, points, img, timers, meta }) {
  Entity.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['game', ...props.type],
      faction: props.faction || 'none'
    },
    status: {
      alive: true,
      invincible: false,
      collides: false,
      collided: false,
      ...status
    },
    img,
    timers,
    meta
  });

  // Point properties
  // Common points are added as baseline, but need not apply across all game
  // entities.
  // The extending entity class are expected to implement additional point
  // properties if needed.
  this.points = {
    health: 0,
    attack: 0,
    value: 0,
    ...points
  };
}

Game.prototype = Object.create(Entity.prototype);

module.exports = Game;
