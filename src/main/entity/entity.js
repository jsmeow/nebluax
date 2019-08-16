const canvas = require('../canvas');
const entities = require('../entities');
const move = require('./event/move/move');
const validateBoundaryCollision = require('./event/validate/validate-boundary-collision');
const randomPosition = require('./event/position/random-position');

function Entity({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  speed = 1,
  dx = 0,
  dy = 0,
  type = [],
  faction = null,
  status = {},
  points = {},
  creator = null
}) {
  // Position coordinates relative to the html5 canvas
  this.x = x;
  this.y = y;

  // Size dimensions relative to the html5 canvas
  this.width = width;
  this.height = height;

  // The entity vector movement unit magnitude
  // Extending entity classes may change the unit magnitude vector speed to
  // Have a consistent dx, dy at a different vector movement step.
  this.speed = speed;

  // The entity vector movement magnitude and direction in the x, y plane
  this.dx = dx;
  this.dy = dy;

  // Types an entity may take
  // An entity may have multiple types, therefore they are stored in a list.
  // Extending entity classes are expected to implement the entity type(s).
  this.type = [...type];

  // Faction affiliation, if applicable for the extending entity class.
  this.faction = faction;

  // Statuses an entity may take
  // Extending entity classes are expected to implement additional statuses if
  // Needed.
  this.status = {
    dispose: false,
    ...status
  };

  // Types of points an entity may have, if applicable.
  // Extending entity classes may implement more points types.
  this.points = { ...points };

  // The creator entity reference
  // On occasion, some entities are created by another entity, this property
  // Holds a reference to the creator entity.
  this.creator = creator;

  // Image object used by the entity, if entity uses an external image.
  this.image = new Image();

  // Image source object used by the entity, if entity uses an external image.
  // Extending entity classes are expected to implement the entity image
  // Source.
  this.imageSource = null;

  // Entity disposal update action
  // Removes the entity from the entities list.
  // Extending entity classes are expected to override this method if needed.
  this.dispose = function(index) {
    entities.splice(index, 1);
  };

  // Pre-update entity event/action
  // Perform an event/action before the update method implementation actions.
  // Extending entity classes are expected to override this method if needed.
  this.preUpdate = function(index) {};

  // Entity timers event/action
  // Perform a timer event/action on a single application frame.
  // Extending entity classes are expected to override this method if needed.
  this.updateTimers = function(index) {};

  // Entity movement event/action
  // While not all entities perform movement, the move event/action is common
  // Enough that it can be reasonably placed inside the entity abstract class.
  this.move = move.bind(this);

  // Post-update entity event/action
  // Perform an event/action after the update method implementation actions.
  // Extending entity classes are expected to override this method if needed.
  this.postUpdate = function(index) {};

  // Update entity event/action
  // Event/actions taken on a single application frame.
  // If the disposing status is true, perform entity disposal.
  // Extending entity classes are expected to override this method if needed.
  this.update = function(index) {
    if (this.status.dispose) {
      this.dispose(index);
    } else {
      this.preUpdate(index);
      this.updateTimers(index);
      this.move();
      this.postUpdate(index);
    }
  };

  // Load entity image source object onto entity image object event/action
  // Extending entity classes are expected to override this method if needed.
  this.loadImage = function() {
    this.image.src = this.imageSource;
  };

  // Render entity event/action on the html5 canvas
  // Extending entity classes are expected to override this method if needed.
  this.render = function() {
    this.loadImage();

    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  };

  // Util methods

  // Validate boundary collision assertion
  this.validateBoundaryCollision = validateBoundaryCollision.bind(this);

  // Get new a new random x, y coordinate position.
  this.randomPosition = randomPosition.bind(this);
}

module.exports = Entity;
