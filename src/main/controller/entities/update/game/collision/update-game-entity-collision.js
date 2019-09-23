const enums = require('../../../../../enums/enums');
const explosiveEntityCollisionEvent = require('./event/explosive-entity-collision-event');
const utils = require('../../../../../utils/utils');

function assertEntityCollisionEvent(entity, _entity, index, _index) {
  return (
    utils.entity.assert.collision.entity(entity, _entity) &&
    entity.faction !== enums.entity.faction.NONE &&
    index !== _index
  );
}

function assertEntityFactions(entity, _entity) {
  return entity.faction !== _entity.faction;
}

function attackEntity(entity, _entity) {
  if (assertEntityFactions(entity, _entity) && !_entity.invincible) {
    _entity.health = _entity.health - entity.attack || 0;
    if (entity.attack && _entity.damages) {
      _entity.timers.damaged.init(_entity);
    }
  }
}

function killEntity(entity, _entity) {
  if (entity.parent) {
    _entity.killerEntity = entity.parent;
    entity.parent.kills = entity.parent.kills + 1;
  } else {
    _entity.killerEntity = entity;
    entity.kills = entity.kills + 1;
  }
  _entity.alive = false;
}

function assignEntityScore(entity, _entity) {
  if (_entity.value) {
    if (entity.parent) {
      entity.parent.score = entity.parent.score + _entity.value;
    } else {
      entity.score = entity.score + _entity.value;
    }
  }
}

function entityCollisionDisposeEvent(entity, _entity) {
  if (entity.alive) {
    if (entity.disposeEvents.collision.alliedEntity) {
      entity.alive = assertEntityFactions(entity, _entity);
    }
    if (entity.disposeEvents.collision.enemyEntity) {
      entity.alive = !assertEntityFactions(entity, _entity);
    }
  }
}

function boundaryCollisionDisposeEvent(entity) {
  if (entity.alive && entity.disposeEvents.collision.boundary) {
    const { x, y, width, height } = entity;
    entity.alive = !utils.entity.assert.collision.boundary(x, y, width, height);
  }
}

function updateGameEntityCollision(entity, index) {
  entity.setList[entity.setListIdx].forEach((_entity, _index) => {
    if (assertEntityCollisionEvent(entity, _entity, index, _index)) {
      attackEntity(entity, _entity);
      if (entity.onCollision) {
        entity.onCollision(entity, _entity);
      }
      if (_entity.health <= 0) {
        killEntity(entity, _entity);
        assignEntityScore(entity, _entity);
      }
      entityCollisionDisposeEvent(entity, _entity);
    }
  });
  boundaryCollisionDisposeEvent(entity);
}

module.exports = updateGameEntityCollision;
module.exports.event = {
  explosive: explosiveEntityCollisionEvent
};
