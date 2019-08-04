const entities = require('../../../entities');
const properties = require('../../../properties/properties-entity');

// Perform event action.
function collision(entity) {
  if (this.status.alive && entity.status.alive) {
    // Exchange attack damage and health points if not invincible status.
    if (!this.status.invincible) {
      this.points.health = this.points.health - entity.points.attack;
    } else if (this.type.includes(properties.types.PROJECTILE.ID)) {
      // Set status flag.
      this.status.invincible = false;

      // Set status flag.
      this.status.alive = false;
    }

    // Exchange attack damage and health points if not invincible status.
    if (!entity.status.invincible) {
      entity.points.health = entity.points.health - this.points.attack;
    } else if (entity.type.includes(properties.types.PROJECTILE.ID)) {
      // Set status flag.
      entity.status.invincible = false;

      // Set status flag.
      entity.status.alive = false;

      // Add to entity points score.
      // Projectile kills need to be attributed to the creator entity.
      if (entity.creator) {
        entity.creator.points.score =
          entity.creator.points.score + this.points.value;
      } else {
        entity.points.score = entity.points.score + this.points.value;
      }
    }

    // Assert and set status flag if health points <= 0
    if (this.points.health <= 0) {
      this.status.alive = false;
    }

    // Assert and set status flag if health points <= 0
    if (entity.points.health <= 0) {
      entity.status.alive = false;

      // Add to entity points score.
      // Projectile kills need to be attributed to the creator entity.
      if (this.creator) {
        this.creator.points.score =
          this.creator.points.score + entity.points.value;
      } else {
        this.points.score = this.points.score + entity.points.value;
      }
    }
  }
}

// Perform post event action.
// Can be overridden by the extending entity for a different post event action.
function collisionPost(hasCollisionOccurred) {
  if (hasCollisionOccurred && !this.status.damaged) {
    // Enable event action.
    this.damageStart();
  }
}

// Validate and perform event action.
function collisionStart(index) {
  // Event status flag.
  let hasCollisionOccurred = false;

  // Iterate entity list.
  entities.forEach((entity, _index) => {
    // Validate collision and assert collision.
    if (
      this.validateEntity().event(entity, index, _index) &&
      this.validateEntity().collision(entity)
    ) {
      // Set event status flag if entity has 1 or more attack points.
      /* If (entity.points.attack > 0) {
        hasCollisionOccurred = true;
      }*/

      hasCollisionOccurred = true;

      // Perform event action.
      this.collision(entity);
    }
  });

  // Perform post event action.
  this.collisionPost(hasCollisionOccurred);
}

module.exports = {
  collision,
  collisionPost,
  collisionStart
};
