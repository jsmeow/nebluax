const Entity = require('../../entity');

function Game({
  pos,
  dims,
  vector,
  props,
  status = {},
  points = {},
  img,
  meta
}) {
  Entity.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['game', ...props.type],
      faction: props.faction || 'none'
    },
    status: {
      alive: status.alive || true,
      invincible: status.invincible || false,
      collides: status.collides || false,
      collided: status.collided || false,
      ...status
    },
    img,
    meta
  });

  // Point properties
  // Common points are added as baseline, but need not apply across all
  // entities.
  // The extending entity class are expected to implement additional point
  // properties if needed.
  this.points = {
    health: points.health || 0,
    attack: points.health || 0,
    value: points.health || 0,
    ...points
  };
}

Game.prototype = Object.create(Entity.prototype);

module.exports = Game;
