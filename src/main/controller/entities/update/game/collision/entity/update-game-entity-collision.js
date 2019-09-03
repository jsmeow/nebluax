const bulletEntityCollisionEvent = require('./event/bullet-entity-collision-event');
const combatEntityCollisionEvent = require('./event/combat-entity-collision-event');
const utils = require('../../../../../../utils/utils');

function updateGameEntityCollision(entity, idx) {
  entity.setList[entity.setListIdx].forEach((_entity, _idx) => {
    /* if (entity.name.includes('Asteroid') && _entity.name.includes('Bullet')) {
      console.log(entity.setList[entity.setListIdx]);
      console.log(utils.entity.assert.collision.entity(entity, _entity));
    }*/

    if (
      entity.onCollision &&
      idx !== _idx &&
      utils.entity.assert.collision.entity(entity, _entity)
    ) {
      entity.onCollision(entity, _entity);
    }
  });
}

module.exports = updateGameEntityCollision;
module.exports.event = {
  bullet: bulletEntityCollisionEvent,
  combat: combatEntityCollisionEvent
};
