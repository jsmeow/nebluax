const util = require('../../util/entity-util');

// Returns an entity collision event assertion
// For a valid collision:
// - entity cannot reference itself
// - both entities must be alive
// - both entities cannot share the same faction
// - both entities cannot be bullets objects
// - the entity collision is asserted
function isCollisionEventValid(entity, _entity, idx, _idx) {
  return (
    idx !== _idx &&
    (entity.alive && _entity.alive) &&
    entity.faction !== _entity.faction &&
    !(entity.name.includes('Bullet') && _entity.name.includes('Bullet')) &&
    util.valid.collision.entity(entity, _entity)
  );
}

// Trade health and attack points between the source and target entity
function doCombat(src, target) {
  if (!src.invincible) {
    src.health = src.health - target.attack;
    target.name.includes('Bullet') && Object.assign(src, { alive: false });
  }
}

// On entity death assign score points to the target entity and set the alive
// flag to false on the source entity
function onDeath(src, target) {
  if (src.health <= 0) {
    target.creator
      ? Object.assign(target.creator, {
          score: target.creator.score + src.value
        })
      : Object.assign(target, { score: target.score + src.value });
    src.alive = false;
  }
}

// Perform a collision assertion and collision action
function updateEntityCollision(entity, idx) {
  entity.setList[entity.setListIdx].forEach((_entity, _index) => {
    if (isCollisionEventValid(entity, _entity, idx, _index)) {
      [[entity, _entity], [_entity, entity]].forEach(e => doCombat(e[0], e[1]));

      [[entity, _entity], [_entity, entity]].forEach(e => onDeath(e[0], e[1]));

      // Set the collided status to an entity
      [entity, _entity].forEach(e => {
        !e.collided && Object.assign(e, { collided: true });
      });

      console.log(entity);
      console.log(_entity);
    }
  });
}

module.exports = updateEntityCollision;
