const Game = require('../game');

function Ship({
  pos,
  dims,
  vector,
  props,
  status = {},
  points = {},
  timers,
  img,
  meta
}) {
  Game.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['ship', ...props.type],
      faction: props.faction || 'none'
    },
    status: {
      ...status,
      alive: status.alive || true,
      invincible: status.invincible || false,
      collides: status.collides || false,
      collided: status.collided || false
    },
    img,
    timers,
    meta
  });

  // Point properties
  // Common points are added as baseline, but need not apply across all Ship
  // entities.
  // The extending entity class are expected to implement additional point
  // properties if needed.
  this.points = {
    ...points,
    health: points.health || 0,
    attack: points.attack || 0,
    value: points.value || 0
  };
}

Ship.prototype = Object.create(Game.prototype);

module.exports = Ship;
