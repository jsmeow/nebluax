// Returns an entity collision assertion
function hasCollidedEntity(entity, _entity) {
  return (
    entity.x <= _entity.x + _entity.width &&
    entity.x + entity.width >= _entity.x &&
    entity.y <= _entity.y + _entity.height &&
    entity.y + entity.height >= _entity.y
  );
}

// Returns an entity collision event assertion
function isCollisionValid(entity, _entity, index, _index) {
  return (
    // Entity cannot reference itself
    index !== _index &&
    // Both entities must have the a status property and be alive
    (entity.status.alive && entity.status.alive) &&
    (_entity.status.alive && _entity.status.alive) &&
    // Both entities must have a faction property and cannot share the faction
    (entity.faction && entity.faction) &&
    (_entity.faction && _entity.faction) &&
    // Both entities cannot be bullets
    !(entity.name.includes('Bullet') && _entity.name.includes('Bullet'))
  );
}

// Perform a collision assertion and collision action
function updateCollisionEvent(entity, index) {
  entity.setList[entity.setListIdx].forEach((_entity, _index) => {
    if (
      isCollisionValid(entity, _entity, index, _index) &&
      hasCollidedEntity(entity, _entity)
    ) {
      [[entity, _entity], [_entity, entity]]
        .forEach((src, target) => {
          if (!src.status.invincible) {
            src.points.health = src.points.health - target.points.attack;

            target.name.includes('Bullet') &&
              Object.assign(target.status, {
                alive: false,
                dispose: true
              });
          }
        })

        [([entity, _entity], [_entity, entity])].forEach((src, target) => {
          if (src.points.health <= 0) {
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
        });

      [entity, _entity].forEach(src => {
        if (!src.status.collided) {
          src.status.collided = true;
        }
      });
    }
  });
}

module.exports = updateCollisionEvent;
