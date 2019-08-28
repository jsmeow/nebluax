const util = require('../../../util/entity-util');

// Returns an entity collision event assertion
function isCollisionEventValid(entity, _entity, index, _index) {
  return (
    // Entity cannot reference itself
    index !== _index &&
    // Both entities must have the a status property and be alive
    (entity.status.alive && _entity.status.alive) &&
    // Both entities must have a faction property and cannot share the faction
    // type
    entity.faction === _entity.faction &&
    // Both entities cannot be bullets
    !(entity.name.includes('Bullet') && _entity.name.includes('Bullet'))
  );
}

function doCombat(src, target) {
  if (!src.status.invincible) {
    src.points.health = src.points.health - target.points.attack;

    target.name.includes('Bullet') &&
      Object.assign(target.status, {
        alive: false,
        dispose: true
      });
  }
}

function onDeath(src, target) {
  target.creator
    ? Object.assign(target.creator.points, {
        score: target.creator.points.score + src.points.value
      })
    : Object.assign(target.points, {
        score: target.points.score + src.points.value
      });

  Object.assign(src.status, {
    alive: false,
    dispose: true
  });
}

function setCollidedStatus(src) {
  if (!src.status.collided) {
    src.status.collided = true;
  }
}

// Perform a collision assertion and collision action
function updateCollisionEvent(entity, index) {
  entity.setList[entity.setListIdx].forEach((_entity, _index) => {
    if (
      isCollisionEventValid(entity, _entity, index, _index) &&
      util.val.collsn(entity, _entity)
    ) {
      [[entity, _entity], [_entity, entity]]
        .forEach((src, target) => {
          doCombat(src, target);
        })

        [([entity, _entity], [_entity, entity])].forEach((src, target) => {
          onDeath(src, target);
        });

      [entity, _entity].forEach(src => {
        setCollidedStatus(src);
      });
    }
  });
}

module.exports = updateCollisionEvent;
