const { fps } = require('../options');
const canvas = require('../canvas');
const move = require('./event/move/move');
const moveToPoint = require('./event/move/move-in-path');
const moveInPath = require('./event/move/move-to-point');
const collision = require('./event/collision/collision');
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
  imageSource = null,
  degrees = 0,
  creator = null,
  factory = null,
  list = null
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
    collided: false,
    moving: false,
    pathing: false,
    ...status
  };

  // Types of points an entity may have, if applicable.
  // Extending entity classes may implement more points types.
  this.points = { ...points };

  // The creator entity reference
  // On occasion, some entities are created by another entity, this property
  // Holds a reference to the creator entity.
  this.creator = creator;

  // The entities factory reference
  this.factory = factory;

  // The entities list reference
  this.list = list;

  // Image object used by the entity, if entity uses an external image.
  // This entity property can be a single image object, or a list of multiple
  // Image objects if the entity performs animation.
  // Defaults to a single image object.
  this.image = new Image();

  // Image source(s) object used by the entity, if entity uses an external
  // Image(s).
  // This entity property can be a single image source object, or a list of
  // Multiple image source objects if the entity performs animation.
  // Extending entity classes are expected to implement the entity image
  // Source.
  // Defaults to a single image source object.
  this.imageSource = imageSource;

  // Image object unloaded/loaded flag
  this.isImageLoaded = false;

  // Image animation object that holds 3 animation properties:
  // 1. Flag whether the entity performs animation.
  // 2. The image objects to be used for the animation. Any one of the images
  // In this list will be mapped to the entity image object before rendering.
  // 3. The image object list index that will reference the image object in the
  // List to be mapped to the entity image object.
  // 4. The animation timer that will increment/change the imageIndex after a
  // Delay.
  this.animationTimer = {
    frame: 0,
    delay: fps,
    imageIndex: 0
  };

  // The entity render rotation in degrees
  this.degrees = degrees;

  // Entity movement event/action
  // While not all entities perform movement, the event/action is shared enough
  // Across entities that it can be reasonably placed inside the entity
  // Abstract class.
  this.move = move.bind(this);

  // Entity collision assertion
  // While not all entities perform entity collision assertion, the
  // Event/action is shared enough across entities that it can be reasonably
  // Placed inside the entity abstract class.
  this.collision = collision.bind(this);

  // Entity disposal update action
  // Removes the entity from the entities list.
  // Extending entity classes are expected to override this method if needed.
  this.dispose = function(index) {
    this.list.splice(index, 1);
  };

  // Pre-update entity event/action
  // Perform an event/action before the update method implementation actions.
  // Extending entity classes are expected to override this method if needed.
  this.preUpdate = function() {};

  // Entity timers event/action
  // Perform a timer event/action on a single application frame.
  // Extending entity classes are expected to override this method if needed.
  this.updateTimers = function() {};

  // Entity update position event/action
  // Perform a position update via the move method.
  // Extending entity classes are expected to override this method if needed.
  this.updatePosition = function() {
    this.move();
  };

  // Entity assert collision event/action
  // Perform an entity collision assertion via the collision method only if it
  // Was passed the entities list via the entity factory.
  // An entity having the list implementation defined means it interacts with
  // Other entities and is therefore capable of entity collision.
  // Extending entity classes are expected to override this method if needed.
  this.assertCollision = function(index) {
    if (this.list) {
      this.collision(index);
    }
  };

  // Reset entity properties after an update in preparation for the next
  // Update, if applicable.
  // Extending entity classes are expected to override this method if needed.
  this.reset = function() {
    if (this.status.collided) {
      this.status.collided = false;
    }
  };

  // Post-update entity event/action
  // Perform an event/action after the update method implementation actions.
  // Extending entity classes are expected to override this method if needed.
  this.postUpdate = function() {};

  // Update entity event/action
  // Event/actions taken on a single application frame.
  // If the disposing status is true, perform entity disposal.
  // Extending entity classes are expected to override this method if needed.
  this.update = function(index) {
    this.preUpdate();

    if (this.status.dispose) {
      this.dispose(index);
    } else {
      this.updateTimers();
      this.updatePosition();
      this.assertCollision(index);
    }

    this.postUpdate();
    this.reset();
  };

  // Load the entity image source object onto entity image object
  // The image source object is preloaded to buffer and optimize performance.
  // Extending entity classes are expected to override this method if needed.
  this.loadImage = function() {
    this.image.src = this.imageSource;
  };

  // Load the entity image source objects onto the image objects
  // The image source objects are preloaded to buffer and optimize performance.
  // Load entity image source objects onto entity image object list if the
  // Entity performs animation.
  // Extending entity classes are expected to override this method if needed.
  this.loadImages = function() {
    this.image = [...Array(this.imageSource.length)].map((_, index) => {
      const image = new Image();
      image.src = this.imageSource[index];
      return image;
    });
  };

  // Update the animation timer event/action
  // Perform an animation timer update on an event/action on a single
  // Application frame.
  // When timer expires, reset the timer.
  // Extending entity classes are expected to override this method if needed.
  this.updateAnimationTimer = function() {
    if (this.animationTimer.frame >= this.animationTimer.delay) {
      this.animationTimer.frame = 0;
    } else {
      this.animationTimer.frame = this.animationTimer.frame + 1;
    }
  };

  // Update the animation image index event/action
  // Extending entity classes are expected to override this method if needed.
  this.updateAnimationImageIndex = function() {
    const timerRangeBegin =
      this.animationTimer.frame >=
      (this.animationTimer.delay / this.image.length) *
        this.animationTimer.imageIndex;

    const timerRangeEnd =
      this.animationTimer.frame <
      (this.animationTimer.delay / this.image.length) *
        (this.animationTimer.imageIndex + 1);

    if (timerRangeBegin && timerRangeEnd) {
      this.animationTimer.imageIndex = this.animationTimer.imageIndex + 1;
    }

    if (this.animationTimer.imageIndex >= this.image.length) {
      this.animationTimer.imageIndex = 0;
    }
  };

  // Render entity event/action on the html5 canvas
  // Extending entity classes are expected to override this method if needed.
  this.render = function() {
    if (this.isImageLoaded) {
      if (Array.isArray(this.image)) {
        canvas.drawImage({
          image: this.image[this.animationTimer.imageIndex],
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          degrees: this.degrees
        });

        this.updateAnimationTimer();
        this.updateAnimationImageIndex();
      } else {
        canvas.drawImage({
          image: this.image,
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          degrees: this.degrees
        });
      }
    } else if (Array.isArray(this.imageSource)) {
      this.loadImages();
      this.isImageLoaded = true;
    } else {
      this.loadImage();
      this.isImageLoaded = true;
    }
  };

  // Util methods

  // Perform movement in a vector line towards a point
  this.moveToPoint = moveToPoint.bind(this);

  // Perform movement in the x and y plane in a vector line path
  this.moveInPath = moveInPath.bind(this);

  // Validate boundary collision assertion
  this.validateBoundaryCollision = validateBoundaryCollision.bind(this);

  // Get new a new random x, y coordinate position.
  this.randomPosition = randomPosition.bind(this);
}

module.exports = Entity;
