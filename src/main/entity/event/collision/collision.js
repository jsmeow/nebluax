const validateEntityCollision = require('./assert-entity-collision');
const validateEntityCollisionEvent = require('./assert-entity-collision-event');

// Cycle through the entities list and perform a collision assertion and
// collision action
function collision(index) {
  this.list.forEach((entity, _index) => {
    // Perform a collision assertion
    if (
      validateEntityCollisionEvent(this, entity, index, _index) &&
      validateEntityCollision(this, entity)
    ) {
      // Perform a collision action

      if (!this.status.invincible) {
        this.points.health = this.points.health - entity.points.attack;

        if (entity.props.type.includes('bullet')) {
          entity.status.alive = false;
          entity.status.dispose = true;
        }
      }

      if (!entity.status.invincible) {
        entity.points.health = entity.points.health - this.points.attack;

        if (this.props.type.includes('bullet')) {
          this.status.alive = false;
          this.status.dispose = true;
        }
      }

      if (this.points.health <= 0) {
        if (entity.creator) {
          entity.creator.points.score =
            entity.creator.points.score + this.points.value;
        } else {
          entity.points.score = entity.points.score + this.points.value;
        }
        this.status.alive = false;
        this.status.dispose = true;
      }

      if (entity.points.health <= 0) {
        if (this.creator) {
          this.creator.points.score =
            this.creator.points.score + entity.points.value;
        } else {
          this.points.score = this.points.score + entity.points.value;
        }
        entity.status.alive = false;
        entity.status.dispose = true;
      }

      if (!this.status.collided) {
        this.status.collided = true;
      }

      if (!entity.status.collided) {
        entity.status.collided = true;
      }
    }
  });
}

module.exports = collision;
